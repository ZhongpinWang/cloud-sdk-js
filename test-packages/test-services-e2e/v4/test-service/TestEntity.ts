/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType,
  edmToTs,
  entityDeserializer,
  transformReturnValueForEdmType,
  transformReturnValueForComplexType,
  defaultDeSerializers,
  OperationParameter,
  BoundOperationRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import type { TestEntityApi } from './TestEntityApi';
import { MyComplexReturnType } from './MyComplexReturnType';
import { TestEntityLink, TestEntityLinkType } from './TestEntityLink';

/**
 * This class represents the entity "TestEntity" of service "TestService".
 */
export class TestEntity<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TestEntityType<T>
{
  /**
   * Technical entity name for TestEntity.
   */
  static override _entityName = 'TestEntity';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/odata/test-service';
  /**
   * All key fields of the TestEntity entity.
   */
  static _keys = ['KeyTestEntity'];
  /**
   * Key Test Entity.
   */
  declare keyTestEntity: DeserializedType<T, 'Edm.Int32'>;
  /**
   * String Property.
   * Maximum length: 111.
   * @nullable
   */
  declare stringProperty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Guid Property.
   * @nullable
   */
  declare guidProperty?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * Boolean Property.
   * @nullable
   */
  declare booleanProperty?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Int 64 Property.
   * @nullable
   */
  declare int64Property?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Double Property.
   * @nullable
   */
  declare doubleProperty?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Decimal Property.
   * @nullable
   */
  declare decimalProperty?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Date Property.
   * @nullable
   */
  declare dateProperty?: DeserializedType<T, 'Edm.Date'> | null;
  /**
   * Time Of Day Property.
   * @nullable
   */
  declare timeOfDayProperty?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Data Time Offset Data Time Property.
   * @nullable
   */
  declare dataTimeOffsetDataTimeProperty?: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  > | null;
  /**
   * Data Time Offset Timestamp Property.
   * @nullable
   */
  declare dataTimeOffsetTimestampProperty?: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  > | null;
  /**
   * One-to-many navigation property to the {@link TestEntityLink} entity.
   */
  declare toMultiLink: TestEntityLink<T>[];

  constructor(_entityApi: TestEntityApi<T>) {
    super(_entityApi);
  }

  /**
   * Bound Function Without Arguments.
   * @param parameters - Object containing all parameters for the function.
   * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
   */
  boundFunctionWithoutArguments(
    parameters: BoundFunctionWithoutArgumentsParameters<T>,
    deSerializers: T = defaultDeSerializers as T
  ): BoundOperationRequestBuilder<
    TestEntity<T>,
    T,
    BoundFunctionWithoutArgumentsParameters<T>,
    string | null
  > {
    const params = {};

    return new BoundOperationRequestBuilder(
      this._entityApi,
      this,
      'boundFunctionWithoutArguments',
      data =>
        transformReturnValueForEdmType(data, val =>
          edmToTs(val.value, 'Edm.String', deSerializers)
        ),
      params,
      deSerializers,
      'function'
    );
  }

  /**
   * Bound Function Without Arguments Complex Return Type.
   * @param parameters - Object containing all parameters for the function.
   * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
   */
  boundFunctionWithoutArgumentsComplexReturnType(
    parameters: BoundFunctionWithoutArgumentsComplexReturnTypeParameters<T>,
    deSerializers: T = defaultDeSerializers as T
  ): BoundOperationRequestBuilder<
    TestEntity<T>,
    T,
    BoundFunctionWithoutArgumentsComplexReturnTypeParameters<T>,
    MyComplexReturnType | null
  > {
    const params = {};

    return new BoundOperationRequestBuilder(
      this._entityApi,
      this,
      'boundFunctionWithoutArgumentsComplexReturnType',
      data =>
        transformReturnValueForComplexType(data, data =>
          entityDeserializer(
            deSerializers || defaultDeSerializers
          ).deserializeComplexType(data, MyComplexReturnType)
        ),
      params,
      deSerializers,
      'function'
    );
  }

  /**
   * Bound Function With Arguments.
   * @param parameters - Object containing all parameters for the function.
   * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
   */
  boundFunctionWithArguments(
    parameters: BoundFunctionWithArgumentsParameters<T>,
    deSerializers: T = defaultDeSerializers as T
  ): BoundOperationRequestBuilder<
    TestEntity<T>,
    T,
    BoundFunctionWithArgumentsParameters<T>,
    string | null
  > {
    const params = {
      param1: new OperationParameter('param1', 'Edm.String', parameters.param1),
      param2: new OperationParameter('param2', 'Edm.String', parameters.param2)
    };

    return new BoundOperationRequestBuilder(
      this._entityApi,
      this,
      'boundFunctionWithArguments',
      data =>
        transformReturnValueForEdmType(data, val =>
          edmToTs(val.value, 'Edm.String', deSerializers)
        ),
      params,
      deSerializers,
      'function'
    );
  }

  /**
   * Bound Action Without Arguments.
   * @param parameters - Object containing all parameters for the action.
   * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
   */
  boundActionWithoutArguments(
    parameters: BoundActionWithoutArgumentsParameters<T>,
    deSerializers: T = defaultDeSerializers as T
  ): BoundOperationRequestBuilder<
    TestEntity<T>,
    T,
    BoundActionWithoutArgumentsParameters<T>,
    string | null
  > {
    const params = {};

    return new BoundOperationRequestBuilder(
      this._entityApi,
      this,
      'boundActionWithoutArguments',
      data =>
        transformReturnValueForEdmType(data, val =>
          edmToTs(val.value, 'Edm.String', deSerializers)
        ),
      params,
      deSerializers,
      'action'
    );
  }
}

export interface TestEntityType<
  T extends DeSerializers = DefaultDeSerializers
> {
  keyTestEntity: DeserializedType<T, 'Edm.Int32'>;
  stringProperty?: DeserializedType<T, 'Edm.String'> | null;
  guidProperty?: DeserializedType<T, 'Edm.Guid'> | null;
  booleanProperty?: DeserializedType<T, 'Edm.Boolean'> | null;
  int64Property?: DeserializedType<T, 'Edm.Int64'> | null;
  doubleProperty?: DeserializedType<T, 'Edm.Double'> | null;
  decimalProperty?: DeserializedType<T, 'Edm.Decimal'> | null;
  dateProperty?: DeserializedType<T, 'Edm.Date'> | null;
  timeOfDayProperty?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  dataTimeOffsetDataTimeProperty?: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  > | null;
  dataTimeOffsetTimestampProperty?: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  > | null;
  toMultiLink: TestEntityLinkType<T>[];
}

/**
 * Type of the parameters to be passed to {@link boundFunctionWithoutArguments}.
 */
export interface BoundFunctionWithoutArgumentsParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Type of the parameters to be passed to {@link boundFunctionWithoutArgumentsComplexReturnType}.
 */
export interface BoundFunctionWithoutArgumentsComplexReturnTypeParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Type of the parameters to be passed to {@link boundFunctionWithArguments}.
 */
export interface BoundFunctionWithArgumentsParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Param 1.
   */
  param1?: string | null;
  /**
   * Param 2.
   */
  param2?: string | null;
}

/**
 * Type of the parameters to be passed to {@link boundActionWithoutArguments}.
 */
export interface BoundActionWithoutArgumentsParameters<
  DeSerializersT extends DeSerializers
> {}
