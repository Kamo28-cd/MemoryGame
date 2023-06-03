import SelectFormField from "@components/common/FormFields/SelectFormField";
import SliderFormField from "@components/common/FormFields/SliderFormField";
import { TextFormField } from "@components/common/FormFields/TextFormField";
import { userFormSchema } from "../../schema/UserFormSchema";
import NumberFormField from "@components/common/FormFields/NumberFormField";
import RadioFormField from "@components/common/FormFields/RadioFormField";
import { AnyObject } from "yup/lib/types";
import StringSchema, { RequiredStringSchema } from "yup/lib/string";
import { RequiredNumberSchema } from "yup/lib/number";
import ObjectSchema, {
  Assign,
  ObjectShape,
  TypeOfShape,
  AssertsShape,
} from "yup/lib/object";
import CustomRadio from "@components/common/FormFields/CustomRadio";
import DatePicker from "@components/common/FormFields/DatePicker";
import { RequiredBooleanSchema } from "yup/lib/boolean";
import {
  userDetailsSchema,
  jointUserDetailsSchema,
} from "../../schema/LifeAnnuitySchema";
import { RemoveNullKeys } from "../HelperTypes";
import { LivingQuoteRequest } from "@src/services/openapi";

export type SelectFormFieldType = typeof SelectFormField;
export type SliderFormFieldType = typeof SliderFormField;
export type TextFormFieldType = typeof TextFormField;
export type NumberFormFieldType = typeof NumberFormField;
export type RadioFormFieldType = typeof RadioFormField;
export type CustomRadioType = typeof CustomRadio;
export type DatePickerType = typeof DatePicker;

export type UserDetails = ObjectSchema<
  Assign<
    ObjectShape,
    {
      sex?: RequiredStringSchema<string | undefined, AnyObject>;
      guaranteePeriod?: RequiredStringSchema<string | undefined, AnyObject>;
      paymentFrequency?: RequiredStringSchema<string | undefined, AnyObject>;
      dob?: RequiredNumberSchema<number | undefined, AnyObject>;
      insuredLives?: RequiredStringSchema<string | undefined, AnyObject>;
      spouseDob?: string;
      incomePercentOnSecondLife?: RequiredStringSchema<
        string | undefined,
        AnyObject
      >;
      spouseSex?: RequiredStringSchema<string | undefined, AnyObject>;
      funeralMultiple?: RequiredStringSchema<string | undefined, AnyObject>;
      funeralBenefit?: RequiredBooleanSchema<boolean>;
      // [x: StringSchema<string | undefined, AnyObject>]: string | boolean | undefined;
    }
  >,
  AnyObject,
  TypeOfShape<any>,
  AssertsShape<any>
>;

export interface UserFormParams {
  formFields: Array<{
    label: string;
    name: string;
    component:
      | SelectFormFieldType
      | SliderFormFieldType
      | TextFormFieldType
      | NumberFormFieldType
      | RadioFormFieldType
      | CustomRadioType
      | DatePickerType;
    options?:
      | Array<string | number>
      | {
          label: string;
          value: string;
        }[];
  }>;
  initialValues: {
    sex?: string;
    guaranteePeriod?: string;
    insuredLives?: string;
    paymentFrequency?: string;
    dob?: string;
    spouseDob?: string;
    incomePercentOnSecondLife?: string;
    spouseSex?: string;
    [x: string]: string | number | undefined;
  };
  formSchema?:
    | typeof userFormSchema
    | typeof userDetailsSchema
    | typeof jointUserDetailsSchema
    | UserDetails
    | AmountSchema;
}

export interface QuoteFormProps {
  initialValues:
    | {
        lumpsumAmount?: string;
        incomeAmount?: string;
        sex?: string;
        guaranteePeriod?: string;
        insuredLives?: string;
        paymentFrequency?: string;
        dob?: string;
        spouseDob?: string;
        incomePercentOnSecondLife?: string;
        spouseSex?: string;
        funeralMultiple?: string;
        funeralBenefit?: boolean;
        [x: string]: string | boolean | undefined;
      }
    | RemoveNullKeys<InitialValuesEntry>;
  formSchema?:
    | typeof userFormSchema
    | typeof userDetailsSchema
    | typeof jointUserDetailsSchema
    | UserDetails
    | AmountSchema;
}

export interface LivingQuoteForm {
  formSchema?:
    | typeof userFormSchema
    | typeof userDetailsSchema
    | typeof jointUserDetailsSchema
    | UserDetails
    | AmountSchema;
  initialValues: ILivingInitial;
}

//TODO: This can be replaced with the LivingInitialValuesEntry
export interface ILivingInitial {
  lumpsumAmount?: string;
  incomeAmount?: string;
  sex?: string;
  paymentFrequency?: string;
  dob?: string;
  incomeCeaseAge?: string;
  assumedRateOfReturn?: string;
}

interface AmountSchema {
  amountSchema(index: string): void;
}

export interface InitialValuesEntry {
  sex?: string;
  guaranteePeriod?: string;
  insuredLives?: string;
  paymentFrequency?: string;
  dob?: string;
  spouseDob?: string;
  incomePercentOnSecondLife?: string;
  spouseSex?: string;
  funeralMultiple?: string;
  funeralBenefit?: boolean;
  lumpsumAmount?: string;
  incomeAmount?: string;
}

export type IDataIntake = {
  contentType: string;
  body: string;
  intakeRecordType?: string;
  entityType?: string;
  recGroupIdField?: string;
  memberIdField?: string;
  groupCustomerNumber?: string;
  profileName?: string;
  entityNameidField?: string;
  idField?: string;
};

export type ISelectField = Array<{
  id?: string;
  label: string;
  value: string;
  name?: string;
}>;
