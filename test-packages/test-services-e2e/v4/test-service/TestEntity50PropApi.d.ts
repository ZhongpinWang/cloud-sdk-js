/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TestEntity50Prop } from './TestEntity50Prop';
import { TestEntity50PropRequestBuilder } from './TestEntity50PropRequestBuilder';
import {
  CustomField,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export declare class TestEntity50PropApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TestEntity50Prop<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): TestEntity50PropApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(linkedApis: []): this;
  entityConstructor: typeof TestEntity50Prop;
  requestBuilder(): TestEntity50PropRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    TestEntity50Prop<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<TestEntity50Prop<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof TestEntity50Prop, DeSerializersT>;
  private _schema?;
  get schema(): {
    KEY_TEST_ENTITY_50_PROP: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    STRING_PROPERTY_1: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GUID_PROPERTY_1: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    BOOLEAN_PROPERTY_1: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    INT_64_PROPERTY_1: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    DOUBLE_PROPERTY_1: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    DECIMAL_PROPERTY_1: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    DATE_PROPERTY_1: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.Date',
      true,
      true
    >;
    TIME_OF_DAY_PROPERTY_1: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    DATA_TIME_OFFSET_DATA_TIME_PROPERTY_1: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    DATA_TIME_OFFSET_TIMESTAMP_PROPERTY_1: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    STRING_PROPERTY_2: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GUID_PROPERTY_2: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    BOOLEAN_PROPERTY_2: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    INT_64_PROPERTY_2: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    DOUBLE_PROPERTY_2: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    DECIMAL_PROPERTY_2: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    DATE_PROPERTY_2: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.Date',
      true,
      true
    >;
    TIME_OF_DAY_PROPERTY_2: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    DATA_TIME_OFFSET_DATA_TIME_PROPERTY_2: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    DATA_TIME_OFFSET_TIMESTAMP_PROPERTY_2: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    STRING_PROPERTY_3: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GUID_PROPERTY_3: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    BOOLEAN_PROPERTY_3: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    INT_64_PROPERTY_3: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    DOUBLE_PROPERTY_3: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    DECIMAL_PROPERTY_3: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    DATE_PROPERTY_3: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.Date',
      true,
      true
    >;
    TIME_OF_DAY_PROPERTY_3: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    DATA_TIME_OFFSET_DATA_TIME_PROPERTY_3: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    DATA_TIME_OFFSET_TIMESTAMP_PROPERTY_3: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    STRING_PROPERTY_4: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GUID_PROPERTY_4: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    BOOLEAN_PROPERTY_4: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    INT_64_PROPERTY_4: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    DOUBLE_PROPERTY_4: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    DECIMAL_PROPERTY_4: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    DATE_PROPERTY_4: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.Date',
      true,
      true
    >;
    TIME_OF_DAY_PROPERTY_4: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    DATA_TIME_OFFSET_DATA_TIME_PROPERTY_4: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    DATA_TIME_OFFSET_TIMESTAMP_PROPERTY_4: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    STRING_PROPERTY_5: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GUID_PROPERTY_5: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    BOOLEAN_PROPERTY_5: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    INT_64_PROPERTY_5: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    DOUBLE_PROPERTY_5: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    DECIMAL_PROPERTY_5: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    DATE_PROPERTY_5: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.Date',
      true,
      true
    >;
    TIME_OF_DAY_PROPERTY_5: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    DATA_TIME_OFFSET_DATA_TIME_PROPERTY_5: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    DATA_TIME_OFFSET_TIMESTAMP_PROPERTY_5: OrderableEdmTypeField<
      TestEntity50Prop<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    ALL_FIELDS: AllFields<TestEntity50Prop<DeSerializers>>;
  };
}
