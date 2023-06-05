import { TScore } from "@/utils/types/Common";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import React from "react";
import { StyledTableContainer } from "./styles";
import { useScoreContext } from "@/context";

interface ILegendProps {
  tries: number;
}

const Legend: React.FC<ILegendProps> = ({ tries }) => {
  const rows = useScoreContext();

  return (
    <StyledTableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Player</TableCell>
            <TableCell align="right">Points</TableCell>
            <TableCell align="right">Tries</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.player}
              </TableCell>
              <TableCell align="right">{row.points}</TableCell>
              <TableCell align="right">
                {tries >= row.moves ? row.moves : tries}/{tries}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default Legend;
