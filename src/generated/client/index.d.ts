
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user_db
 * 
 */
export type user_db = $Result.DefaultSelection<Prisma.$user_dbPayload>
/**
 * Model user_note
 * 
 */
export type user_note = $Result.DefaultSelection<Prisma.$user_notePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more User_dbs
 * const user_dbs = await prisma.user_db.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more User_dbs
   * const user_dbs = await prisma.user_db.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user_db`: Exposes CRUD operations for the **user_db** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_dbs
    * const user_dbs = await prisma.user_db.findMany()
    * ```
    */
  get user_db(): Prisma.user_dbDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_note`: Exposes CRUD operations for the **user_note** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_notes
    * const user_notes = await prisma.user_note.findMany()
    * ```
    */
  get user_note(): Prisma.user_noteDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.1
   * Query Engine version: d1b3f377ca835d73fd50954a5e22128b9ebdd6b8
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user_db: 'user_db',
    user_note: 'user_note'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user_db" | "user_note"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user_db: {
        payload: Prisma.$user_dbPayload<ExtArgs>
        fields: Prisma.user_dbFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_dbFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_dbPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_dbFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_dbPayload>
          }
          findFirst: {
            args: Prisma.user_dbFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_dbPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_dbFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_dbPayload>
          }
          findMany: {
            args: Prisma.user_dbFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_dbPayload>[]
          }
          create: {
            args: Prisma.user_dbCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_dbPayload>
          }
          createMany: {
            args: Prisma.user_dbCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_dbCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_dbPayload>[]
          }
          delete: {
            args: Prisma.user_dbDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_dbPayload>
          }
          update: {
            args: Prisma.user_dbUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_dbPayload>
          }
          deleteMany: {
            args: Prisma.user_dbDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_dbUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_dbUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_dbPayload>[]
          }
          upsert: {
            args: Prisma.user_dbUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_dbPayload>
          }
          aggregate: {
            args: Prisma.User_dbAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_db>
          }
          groupBy: {
            args: Prisma.user_dbGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_dbGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_dbCountArgs<ExtArgs>
            result: $Utils.Optional<User_dbCountAggregateOutputType> | number
          }
        }
      }
      user_note: {
        payload: Prisma.$user_notePayload<ExtArgs>
        fields: Prisma.user_noteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_noteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_notePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_noteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_notePayload>
          }
          findFirst: {
            args: Prisma.user_noteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_notePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_noteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_notePayload>
          }
          findMany: {
            args: Prisma.user_noteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_notePayload>[]
          }
          create: {
            args: Prisma.user_noteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_notePayload>
          }
          createMany: {
            args: Prisma.user_noteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_noteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_notePayload>[]
          }
          delete: {
            args: Prisma.user_noteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_notePayload>
          }
          update: {
            args: Prisma.user_noteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_notePayload>
          }
          deleteMany: {
            args: Prisma.user_noteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_noteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_noteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_notePayload>[]
          }
          upsert: {
            args: Prisma.user_noteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_notePayload>
          }
          aggregate: {
            args: Prisma.User_noteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_note>
          }
          groupBy: {
            args: Prisma.user_noteGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_noteGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_noteCountArgs<ExtArgs>
            result: $Utils.Optional<User_noteCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user_db?: user_dbOmit
    user_note?: user_noteOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type User_dbCountOutputType
   */

  export type User_dbCountOutputType = {
    user_note: number
  }

  export type User_dbCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_note?: boolean | User_dbCountOutputTypeCountUser_noteArgs
  }

  // Custom InputTypes
  /**
   * User_dbCountOutputType without action
   */
  export type User_dbCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_dbCountOutputType
     */
    select?: User_dbCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * User_dbCountOutputType without action
   */
  export type User_dbCountOutputTypeCountUser_noteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_noteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user_db
   */

  export type AggregateUser_db = {
    _count: User_dbCountAggregateOutputType | null
    _avg: User_dbAvgAggregateOutputType | null
    _sum: User_dbSumAggregateOutputType | null
    _min: User_dbMinAggregateOutputType | null
    _max: User_dbMaxAggregateOutputType | null
  }

  export type User_dbAvgAggregateOutputType = {
    seq: number | null
  }

  export type User_dbSumAggregateOutputType = {
    seq: number | null
  }

  export type User_dbMinAggregateOutputType = {
    seq: number | null
    name: string | null
    phone: string | null
    into_date: string | null
    into_path: string | null
    notice_car: string | null
    step: string | null
    del_yn: string | null
    create_date: Date | null
    update_date: Date | null
    del_date: Date | null
  }

  export type User_dbMaxAggregateOutputType = {
    seq: number | null
    name: string | null
    phone: string | null
    into_date: string | null
    into_path: string | null
    notice_car: string | null
    step: string | null
    del_yn: string | null
    create_date: Date | null
    update_date: Date | null
    del_date: Date | null
  }

  export type User_dbCountAggregateOutputType = {
    seq: number
    name: number
    phone: number
    into_date: number
    into_path: number
    notice_car: number
    step: number
    del_yn: number
    create_date: number
    update_date: number
    del_date: number
    _all: number
  }


  export type User_dbAvgAggregateInputType = {
    seq?: true
  }

  export type User_dbSumAggregateInputType = {
    seq?: true
  }

  export type User_dbMinAggregateInputType = {
    seq?: true
    name?: true
    phone?: true
    into_date?: true
    into_path?: true
    notice_car?: true
    step?: true
    del_yn?: true
    create_date?: true
    update_date?: true
    del_date?: true
  }

  export type User_dbMaxAggregateInputType = {
    seq?: true
    name?: true
    phone?: true
    into_date?: true
    into_path?: true
    notice_car?: true
    step?: true
    del_yn?: true
    create_date?: true
    update_date?: true
    del_date?: true
  }

  export type User_dbCountAggregateInputType = {
    seq?: true
    name?: true
    phone?: true
    into_date?: true
    into_path?: true
    notice_car?: true
    step?: true
    del_yn?: true
    create_date?: true
    update_date?: true
    del_date?: true
    _all?: true
  }

  export type User_dbAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_db to aggregate.
     */
    where?: user_dbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_dbs to fetch.
     */
    orderBy?: user_dbOrderByWithRelationInput | user_dbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_dbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_dbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_dbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_dbs
    **/
    _count?: true | User_dbCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_dbAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_dbSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_dbMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_dbMaxAggregateInputType
  }

  export type GetUser_dbAggregateType<T extends User_dbAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_db]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_db[P]>
      : GetScalarType<T[P], AggregateUser_db[P]>
  }




  export type user_dbGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_dbWhereInput
    orderBy?: user_dbOrderByWithAggregationInput | user_dbOrderByWithAggregationInput[]
    by: User_dbScalarFieldEnum[] | User_dbScalarFieldEnum
    having?: user_dbScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_dbCountAggregateInputType | true
    _avg?: User_dbAvgAggregateInputType
    _sum?: User_dbSumAggregateInputType
    _min?: User_dbMinAggregateInputType
    _max?: User_dbMaxAggregateInputType
  }

  export type User_dbGroupByOutputType = {
    seq: number
    name: string | null
    phone: string | null
    into_date: string | null
    into_path: string | null
    notice_car: string | null
    step: string | null
    del_yn: string | null
    create_date: Date | null
    update_date: Date | null
    del_date: Date | null
    _count: User_dbCountAggregateOutputType | null
    _avg: User_dbAvgAggregateOutputType | null
    _sum: User_dbSumAggregateOutputType | null
    _min: User_dbMinAggregateOutputType | null
    _max: User_dbMaxAggregateOutputType | null
  }

  type GetUser_dbGroupByPayload<T extends user_dbGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_dbGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_dbGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_dbGroupByOutputType[P]>
            : GetScalarType<T[P], User_dbGroupByOutputType[P]>
        }
      >
    >


  export type user_dbSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    seq?: boolean
    name?: boolean
    phone?: boolean
    into_date?: boolean
    into_path?: boolean
    notice_car?: boolean
    step?: boolean
    del_yn?: boolean
    create_date?: boolean
    update_date?: boolean
    del_date?: boolean
    user_note?: boolean | user_db$user_noteArgs<ExtArgs>
    _count?: boolean | User_dbCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_db"]>

  export type user_dbSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    seq?: boolean
    name?: boolean
    phone?: boolean
    into_date?: boolean
    into_path?: boolean
    notice_car?: boolean
    step?: boolean
    del_yn?: boolean
    create_date?: boolean
    update_date?: boolean
    del_date?: boolean
  }, ExtArgs["result"]["user_db"]>

  export type user_dbSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    seq?: boolean
    name?: boolean
    phone?: boolean
    into_date?: boolean
    into_path?: boolean
    notice_car?: boolean
    step?: boolean
    del_yn?: boolean
    create_date?: boolean
    update_date?: boolean
    del_date?: boolean
  }, ExtArgs["result"]["user_db"]>

  export type user_dbSelectScalar = {
    seq?: boolean
    name?: boolean
    phone?: boolean
    into_date?: boolean
    into_path?: boolean
    notice_car?: boolean
    step?: boolean
    del_yn?: boolean
    create_date?: boolean
    update_date?: boolean
    del_date?: boolean
  }

  export type user_dbOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"seq" | "name" | "phone" | "into_date" | "into_path" | "notice_car" | "step" | "del_yn" | "create_date" | "update_date" | "del_date", ExtArgs["result"]["user_db"]>
  export type user_dbInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_note?: boolean | user_db$user_noteArgs<ExtArgs>
    _count?: boolean | User_dbCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type user_dbIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type user_dbIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $user_dbPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_db"
    objects: {
      user_note: Prisma.$user_notePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      seq: number
      name: string | null
      phone: string | null
      into_date: string | null
      into_path: string | null
      notice_car: string | null
      step: string | null
      del_yn: string | null
      create_date: Date | null
      update_date: Date | null
      del_date: Date | null
    }, ExtArgs["result"]["user_db"]>
    composites: {}
  }

  type user_dbGetPayload<S extends boolean | null | undefined | user_dbDefaultArgs> = $Result.GetResult<Prisma.$user_dbPayload, S>

  type user_dbCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_dbFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_dbCountAggregateInputType | true
    }

  export interface user_dbDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_db'], meta: { name: 'user_db' } }
    /**
     * Find zero or one User_db that matches the filter.
     * @param {user_dbFindUniqueArgs} args - Arguments to find a User_db
     * @example
     * // Get one User_db
     * const user_db = await prisma.user_db.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_dbFindUniqueArgs>(args: SelectSubset<T, user_dbFindUniqueArgs<ExtArgs>>): Prisma__user_dbClient<$Result.GetResult<Prisma.$user_dbPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_db that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_dbFindUniqueOrThrowArgs} args - Arguments to find a User_db
     * @example
     * // Get one User_db
     * const user_db = await prisma.user_db.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_dbFindUniqueOrThrowArgs>(args: SelectSubset<T, user_dbFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_dbClient<$Result.GetResult<Prisma.$user_dbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_db that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_dbFindFirstArgs} args - Arguments to find a User_db
     * @example
     * // Get one User_db
     * const user_db = await prisma.user_db.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_dbFindFirstArgs>(args?: SelectSubset<T, user_dbFindFirstArgs<ExtArgs>>): Prisma__user_dbClient<$Result.GetResult<Prisma.$user_dbPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_db that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_dbFindFirstOrThrowArgs} args - Arguments to find a User_db
     * @example
     * // Get one User_db
     * const user_db = await prisma.user_db.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_dbFindFirstOrThrowArgs>(args?: SelectSubset<T, user_dbFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_dbClient<$Result.GetResult<Prisma.$user_dbPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_dbs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_dbFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_dbs
     * const user_dbs = await prisma.user_db.findMany()
     * 
     * // Get first 10 User_dbs
     * const user_dbs = await prisma.user_db.findMany({ take: 10 })
     * 
     * // Only select the `seq`
     * const user_dbWithSeqOnly = await prisma.user_db.findMany({ select: { seq: true } })
     * 
     */
    findMany<T extends user_dbFindManyArgs>(args?: SelectSubset<T, user_dbFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_dbPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_db.
     * @param {user_dbCreateArgs} args - Arguments to create a User_db.
     * @example
     * // Create one User_db
     * const User_db = await prisma.user_db.create({
     *   data: {
     *     // ... data to create a User_db
     *   }
     * })
     * 
     */
    create<T extends user_dbCreateArgs>(args: SelectSubset<T, user_dbCreateArgs<ExtArgs>>): Prisma__user_dbClient<$Result.GetResult<Prisma.$user_dbPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_dbs.
     * @param {user_dbCreateManyArgs} args - Arguments to create many User_dbs.
     * @example
     * // Create many User_dbs
     * const user_db = await prisma.user_db.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_dbCreateManyArgs>(args?: SelectSubset<T, user_dbCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_dbs and returns the data saved in the database.
     * @param {user_dbCreateManyAndReturnArgs} args - Arguments to create many User_dbs.
     * @example
     * // Create many User_dbs
     * const user_db = await prisma.user_db.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_dbs and only return the `seq`
     * const user_dbWithSeqOnly = await prisma.user_db.createManyAndReturn({
     *   select: { seq: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_dbCreateManyAndReturnArgs>(args?: SelectSubset<T, user_dbCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_dbPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_db.
     * @param {user_dbDeleteArgs} args - Arguments to delete one User_db.
     * @example
     * // Delete one User_db
     * const User_db = await prisma.user_db.delete({
     *   where: {
     *     // ... filter to delete one User_db
     *   }
     * })
     * 
     */
    delete<T extends user_dbDeleteArgs>(args: SelectSubset<T, user_dbDeleteArgs<ExtArgs>>): Prisma__user_dbClient<$Result.GetResult<Prisma.$user_dbPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_db.
     * @param {user_dbUpdateArgs} args - Arguments to update one User_db.
     * @example
     * // Update one User_db
     * const user_db = await prisma.user_db.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_dbUpdateArgs>(args: SelectSubset<T, user_dbUpdateArgs<ExtArgs>>): Prisma__user_dbClient<$Result.GetResult<Prisma.$user_dbPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_dbs.
     * @param {user_dbDeleteManyArgs} args - Arguments to filter User_dbs to delete.
     * @example
     * // Delete a few User_dbs
     * const { count } = await prisma.user_db.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_dbDeleteManyArgs>(args?: SelectSubset<T, user_dbDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_dbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_dbUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_dbs
     * const user_db = await prisma.user_db.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_dbUpdateManyArgs>(args: SelectSubset<T, user_dbUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_dbs and returns the data updated in the database.
     * @param {user_dbUpdateManyAndReturnArgs} args - Arguments to update many User_dbs.
     * @example
     * // Update many User_dbs
     * const user_db = await prisma.user_db.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_dbs and only return the `seq`
     * const user_dbWithSeqOnly = await prisma.user_db.updateManyAndReturn({
     *   select: { seq: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends user_dbUpdateManyAndReturnArgs>(args: SelectSubset<T, user_dbUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_dbPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_db.
     * @param {user_dbUpsertArgs} args - Arguments to update or create a User_db.
     * @example
     * // Update or create a User_db
     * const user_db = await prisma.user_db.upsert({
     *   create: {
     *     // ... data to create a User_db
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_db we want to update
     *   }
     * })
     */
    upsert<T extends user_dbUpsertArgs>(args: SelectSubset<T, user_dbUpsertArgs<ExtArgs>>): Prisma__user_dbClient<$Result.GetResult<Prisma.$user_dbPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_dbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_dbCountArgs} args - Arguments to filter User_dbs to count.
     * @example
     * // Count the number of User_dbs
     * const count = await prisma.user_db.count({
     *   where: {
     *     // ... the filter for the User_dbs we want to count
     *   }
     * })
    **/
    count<T extends user_dbCountArgs>(
      args?: Subset<T, user_dbCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_dbCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_db.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_dbAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_dbAggregateArgs>(args: Subset<T, User_dbAggregateArgs>): Prisma.PrismaPromise<GetUser_dbAggregateType<T>>

    /**
     * Group by User_db.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_dbGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_dbGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_dbGroupByArgs['orderBy'] }
        : { orderBy?: user_dbGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_dbGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_dbGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_db model
   */
  readonly fields: user_dbFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_db.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_dbClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_note<T extends user_db$user_noteArgs<ExtArgs> = {}>(args?: Subset<T, user_db$user_noteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_notePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_db model
   */
  interface user_dbFieldRefs {
    readonly seq: FieldRef<"user_db", 'Int'>
    readonly name: FieldRef<"user_db", 'String'>
    readonly phone: FieldRef<"user_db", 'String'>
    readonly into_date: FieldRef<"user_db", 'String'>
    readonly into_path: FieldRef<"user_db", 'String'>
    readonly notice_car: FieldRef<"user_db", 'String'>
    readonly step: FieldRef<"user_db", 'String'>
    readonly del_yn: FieldRef<"user_db", 'String'>
    readonly create_date: FieldRef<"user_db", 'DateTime'>
    readonly update_date: FieldRef<"user_db", 'DateTime'>
    readonly del_date: FieldRef<"user_db", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_db findUnique
   */
  export type user_dbFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_db
     */
    select?: user_dbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_db
     */
    omit?: user_dbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_dbInclude<ExtArgs> | null
    /**
     * Filter, which user_db to fetch.
     */
    where: user_dbWhereUniqueInput
  }

  /**
   * user_db findUniqueOrThrow
   */
  export type user_dbFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_db
     */
    select?: user_dbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_db
     */
    omit?: user_dbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_dbInclude<ExtArgs> | null
    /**
     * Filter, which user_db to fetch.
     */
    where: user_dbWhereUniqueInput
  }

  /**
   * user_db findFirst
   */
  export type user_dbFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_db
     */
    select?: user_dbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_db
     */
    omit?: user_dbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_dbInclude<ExtArgs> | null
    /**
     * Filter, which user_db to fetch.
     */
    where?: user_dbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_dbs to fetch.
     */
    orderBy?: user_dbOrderByWithRelationInput | user_dbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_dbs.
     */
    cursor?: user_dbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_dbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_dbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_dbs.
     */
    distinct?: User_dbScalarFieldEnum | User_dbScalarFieldEnum[]
  }

  /**
   * user_db findFirstOrThrow
   */
  export type user_dbFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_db
     */
    select?: user_dbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_db
     */
    omit?: user_dbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_dbInclude<ExtArgs> | null
    /**
     * Filter, which user_db to fetch.
     */
    where?: user_dbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_dbs to fetch.
     */
    orderBy?: user_dbOrderByWithRelationInput | user_dbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_dbs.
     */
    cursor?: user_dbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_dbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_dbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_dbs.
     */
    distinct?: User_dbScalarFieldEnum | User_dbScalarFieldEnum[]
  }

  /**
   * user_db findMany
   */
  export type user_dbFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_db
     */
    select?: user_dbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_db
     */
    omit?: user_dbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_dbInclude<ExtArgs> | null
    /**
     * Filter, which user_dbs to fetch.
     */
    where?: user_dbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_dbs to fetch.
     */
    orderBy?: user_dbOrderByWithRelationInput | user_dbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_dbs.
     */
    cursor?: user_dbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_dbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_dbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_dbs.
     */
    distinct?: User_dbScalarFieldEnum | User_dbScalarFieldEnum[]
  }

  /**
   * user_db create
   */
  export type user_dbCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_db
     */
    select?: user_dbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_db
     */
    omit?: user_dbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_dbInclude<ExtArgs> | null
    /**
     * The data needed to create a user_db.
     */
    data?: XOR<user_dbCreateInput, user_dbUncheckedCreateInput>
  }

  /**
   * user_db createMany
   */
  export type user_dbCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_dbs.
     */
    data: user_dbCreateManyInput | user_dbCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_db createManyAndReturn
   */
  export type user_dbCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_db
     */
    select?: user_dbSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_db
     */
    omit?: user_dbOmit<ExtArgs> | null
    /**
     * The data used to create many user_dbs.
     */
    data: user_dbCreateManyInput | user_dbCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_db update
   */
  export type user_dbUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_db
     */
    select?: user_dbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_db
     */
    omit?: user_dbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_dbInclude<ExtArgs> | null
    /**
     * The data needed to update a user_db.
     */
    data: XOR<user_dbUpdateInput, user_dbUncheckedUpdateInput>
    /**
     * Choose, which user_db to update.
     */
    where: user_dbWhereUniqueInput
  }

  /**
   * user_db updateMany
   */
  export type user_dbUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_dbs.
     */
    data: XOR<user_dbUpdateManyMutationInput, user_dbUncheckedUpdateManyInput>
    /**
     * Filter which user_dbs to update
     */
    where?: user_dbWhereInput
    /**
     * Limit how many user_dbs to update.
     */
    limit?: number
  }

  /**
   * user_db updateManyAndReturn
   */
  export type user_dbUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_db
     */
    select?: user_dbSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_db
     */
    omit?: user_dbOmit<ExtArgs> | null
    /**
     * The data used to update user_dbs.
     */
    data: XOR<user_dbUpdateManyMutationInput, user_dbUncheckedUpdateManyInput>
    /**
     * Filter which user_dbs to update
     */
    where?: user_dbWhereInput
    /**
     * Limit how many user_dbs to update.
     */
    limit?: number
  }

  /**
   * user_db upsert
   */
  export type user_dbUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_db
     */
    select?: user_dbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_db
     */
    omit?: user_dbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_dbInclude<ExtArgs> | null
    /**
     * The filter to search for the user_db to update in case it exists.
     */
    where: user_dbWhereUniqueInput
    /**
     * In case the user_db found by the `where` argument doesn't exist, create a new user_db with this data.
     */
    create: XOR<user_dbCreateInput, user_dbUncheckedCreateInput>
    /**
     * In case the user_db was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_dbUpdateInput, user_dbUncheckedUpdateInput>
  }

  /**
   * user_db delete
   */
  export type user_dbDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_db
     */
    select?: user_dbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_db
     */
    omit?: user_dbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_dbInclude<ExtArgs> | null
    /**
     * Filter which user_db to delete.
     */
    where: user_dbWhereUniqueInput
  }

  /**
   * user_db deleteMany
   */
  export type user_dbDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_dbs to delete
     */
    where?: user_dbWhereInput
    /**
     * Limit how many user_dbs to delete.
     */
    limit?: number
  }

  /**
   * user_db.user_note
   */
  export type user_db$user_noteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_note
     */
    select?: user_noteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_note
     */
    omit?: user_noteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_noteInclude<ExtArgs> | null
    where?: user_noteWhereInput
    orderBy?: user_noteOrderByWithRelationInput | user_noteOrderByWithRelationInput[]
    cursor?: user_noteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_noteScalarFieldEnum | User_noteScalarFieldEnum[]
  }

  /**
   * user_db without action
   */
  export type user_dbDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_db
     */
    select?: user_dbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_db
     */
    omit?: user_dbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_dbInclude<ExtArgs> | null
  }


  /**
   * Model user_note
   */

  export type AggregateUser_note = {
    _count: User_noteCountAggregateOutputType | null
    _avg: User_noteAvgAggregateOutputType | null
    _sum: User_noteSumAggregateOutputType | null
    _min: User_noteMinAggregateOutputType | null
    _max: User_noteMaxAggregateOutputType | null
  }

  export type User_noteAvgAggregateOutputType = {
    seq: number | null
    user_db_seq: number | null
  }

  export type User_noteSumAggregateOutputType = {
    seq: number | null
    user_db_seq: number | null
  }

  export type User_noteMinAggregateOutputType = {
    seq: number | null
    user_db_seq: number | null
    tell_date: string | null
    content: string | null
    del_yn: string | null
    create_date: Date | null
    update_date: Date | null
    del_date: Date | null
    call_date: Date | null
  }

  export type User_noteMaxAggregateOutputType = {
    seq: number | null
    user_db_seq: number | null
    tell_date: string | null
    content: string | null
    del_yn: string | null
    create_date: Date | null
    update_date: Date | null
    del_date: Date | null
    call_date: Date | null
  }

  export type User_noteCountAggregateOutputType = {
    seq: number
    user_db_seq: number
    tell_date: number
    content: number
    del_yn: number
    create_date: number
    update_date: number
    del_date: number
    call_date: number
    _all: number
  }


  export type User_noteAvgAggregateInputType = {
    seq?: true
    user_db_seq?: true
  }

  export type User_noteSumAggregateInputType = {
    seq?: true
    user_db_seq?: true
  }

  export type User_noteMinAggregateInputType = {
    seq?: true
    user_db_seq?: true
    tell_date?: true
    content?: true
    del_yn?: true
    create_date?: true
    update_date?: true
    del_date?: true
    call_date?: true
  }

  export type User_noteMaxAggregateInputType = {
    seq?: true
    user_db_seq?: true
    tell_date?: true
    content?: true
    del_yn?: true
    create_date?: true
    update_date?: true
    del_date?: true
    call_date?: true
  }

  export type User_noteCountAggregateInputType = {
    seq?: true
    user_db_seq?: true
    tell_date?: true
    content?: true
    del_yn?: true
    create_date?: true
    update_date?: true
    del_date?: true
    call_date?: true
    _all?: true
  }

  export type User_noteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_note to aggregate.
     */
    where?: user_noteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_notes to fetch.
     */
    orderBy?: user_noteOrderByWithRelationInput | user_noteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_noteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_notes
    **/
    _count?: true | User_noteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_noteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_noteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_noteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_noteMaxAggregateInputType
  }

  export type GetUser_noteAggregateType<T extends User_noteAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_note]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_note[P]>
      : GetScalarType<T[P], AggregateUser_note[P]>
  }




  export type user_noteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_noteWhereInput
    orderBy?: user_noteOrderByWithAggregationInput | user_noteOrderByWithAggregationInput[]
    by: User_noteScalarFieldEnum[] | User_noteScalarFieldEnum
    having?: user_noteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_noteCountAggregateInputType | true
    _avg?: User_noteAvgAggregateInputType
    _sum?: User_noteSumAggregateInputType
    _min?: User_noteMinAggregateInputType
    _max?: User_noteMaxAggregateInputType
  }

  export type User_noteGroupByOutputType = {
    seq: number
    user_db_seq: number
    tell_date: string | null
    content: string | null
    del_yn: string | null
    create_date: Date | null
    update_date: Date | null
    del_date: Date | null
    call_date: Date | null
    _count: User_noteCountAggregateOutputType | null
    _avg: User_noteAvgAggregateOutputType | null
    _sum: User_noteSumAggregateOutputType | null
    _min: User_noteMinAggregateOutputType | null
    _max: User_noteMaxAggregateOutputType | null
  }

  type GetUser_noteGroupByPayload<T extends user_noteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_noteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_noteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_noteGroupByOutputType[P]>
            : GetScalarType<T[P], User_noteGroupByOutputType[P]>
        }
      >
    >


  export type user_noteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    seq?: boolean
    user_db_seq?: boolean
    tell_date?: boolean
    content?: boolean
    del_yn?: boolean
    create_date?: boolean
    update_date?: boolean
    del_date?: boolean
    call_date?: boolean
    user?: boolean | user_dbDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_note"]>

  export type user_noteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    seq?: boolean
    user_db_seq?: boolean
    tell_date?: boolean
    content?: boolean
    del_yn?: boolean
    create_date?: boolean
    update_date?: boolean
    del_date?: boolean
    call_date?: boolean
    user?: boolean | user_dbDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_note"]>

  export type user_noteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    seq?: boolean
    user_db_seq?: boolean
    tell_date?: boolean
    content?: boolean
    del_yn?: boolean
    create_date?: boolean
    update_date?: boolean
    del_date?: boolean
    call_date?: boolean
    user?: boolean | user_dbDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_note"]>

  export type user_noteSelectScalar = {
    seq?: boolean
    user_db_seq?: boolean
    tell_date?: boolean
    content?: boolean
    del_yn?: boolean
    create_date?: boolean
    update_date?: boolean
    del_date?: boolean
    call_date?: boolean
  }

  export type user_noteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"seq" | "user_db_seq" | "tell_date" | "content" | "del_yn" | "create_date" | "update_date" | "del_date" | "call_date", ExtArgs["result"]["user_note"]>
  export type user_noteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | user_dbDefaultArgs<ExtArgs>
  }
  export type user_noteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | user_dbDefaultArgs<ExtArgs>
  }
  export type user_noteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | user_dbDefaultArgs<ExtArgs>
  }

  export type $user_notePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_note"
    objects: {
      user: Prisma.$user_dbPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      seq: number
      user_db_seq: number
      tell_date: string | null
      content: string | null
      del_yn: string | null
      create_date: Date | null
      update_date: Date | null
      del_date: Date | null
      call_date: Date | null
    }, ExtArgs["result"]["user_note"]>
    composites: {}
  }

  type user_noteGetPayload<S extends boolean | null | undefined | user_noteDefaultArgs> = $Result.GetResult<Prisma.$user_notePayload, S>

  type user_noteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_noteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_noteCountAggregateInputType | true
    }

  export interface user_noteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_note'], meta: { name: 'user_note' } }
    /**
     * Find zero or one User_note that matches the filter.
     * @param {user_noteFindUniqueArgs} args - Arguments to find a User_note
     * @example
     * // Get one User_note
     * const user_note = await prisma.user_note.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_noteFindUniqueArgs>(args: SelectSubset<T, user_noteFindUniqueArgs<ExtArgs>>): Prisma__user_noteClient<$Result.GetResult<Prisma.$user_notePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_note that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_noteFindUniqueOrThrowArgs} args - Arguments to find a User_note
     * @example
     * // Get one User_note
     * const user_note = await prisma.user_note.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_noteFindUniqueOrThrowArgs>(args: SelectSubset<T, user_noteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_noteClient<$Result.GetResult<Prisma.$user_notePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_note that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_noteFindFirstArgs} args - Arguments to find a User_note
     * @example
     * // Get one User_note
     * const user_note = await prisma.user_note.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_noteFindFirstArgs>(args?: SelectSubset<T, user_noteFindFirstArgs<ExtArgs>>): Prisma__user_noteClient<$Result.GetResult<Prisma.$user_notePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_note that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_noteFindFirstOrThrowArgs} args - Arguments to find a User_note
     * @example
     * // Get one User_note
     * const user_note = await prisma.user_note.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_noteFindFirstOrThrowArgs>(args?: SelectSubset<T, user_noteFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_noteClient<$Result.GetResult<Prisma.$user_notePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_noteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_notes
     * const user_notes = await prisma.user_note.findMany()
     * 
     * // Get first 10 User_notes
     * const user_notes = await prisma.user_note.findMany({ take: 10 })
     * 
     * // Only select the `seq`
     * const user_noteWithSeqOnly = await prisma.user_note.findMany({ select: { seq: true } })
     * 
     */
    findMany<T extends user_noteFindManyArgs>(args?: SelectSubset<T, user_noteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_notePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_note.
     * @param {user_noteCreateArgs} args - Arguments to create a User_note.
     * @example
     * // Create one User_note
     * const User_note = await prisma.user_note.create({
     *   data: {
     *     // ... data to create a User_note
     *   }
     * })
     * 
     */
    create<T extends user_noteCreateArgs>(args: SelectSubset<T, user_noteCreateArgs<ExtArgs>>): Prisma__user_noteClient<$Result.GetResult<Prisma.$user_notePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_notes.
     * @param {user_noteCreateManyArgs} args - Arguments to create many User_notes.
     * @example
     * // Create many User_notes
     * const user_note = await prisma.user_note.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_noteCreateManyArgs>(args?: SelectSubset<T, user_noteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_notes and returns the data saved in the database.
     * @param {user_noteCreateManyAndReturnArgs} args - Arguments to create many User_notes.
     * @example
     * // Create many User_notes
     * const user_note = await prisma.user_note.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_notes and only return the `seq`
     * const user_noteWithSeqOnly = await prisma.user_note.createManyAndReturn({
     *   select: { seq: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_noteCreateManyAndReturnArgs>(args?: SelectSubset<T, user_noteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_notePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_note.
     * @param {user_noteDeleteArgs} args - Arguments to delete one User_note.
     * @example
     * // Delete one User_note
     * const User_note = await prisma.user_note.delete({
     *   where: {
     *     // ... filter to delete one User_note
     *   }
     * })
     * 
     */
    delete<T extends user_noteDeleteArgs>(args: SelectSubset<T, user_noteDeleteArgs<ExtArgs>>): Prisma__user_noteClient<$Result.GetResult<Prisma.$user_notePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_note.
     * @param {user_noteUpdateArgs} args - Arguments to update one User_note.
     * @example
     * // Update one User_note
     * const user_note = await prisma.user_note.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_noteUpdateArgs>(args: SelectSubset<T, user_noteUpdateArgs<ExtArgs>>): Prisma__user_noteClient<$Result.GetResult<Prisma.$user_notePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_notes.
     * @param {user_noteDeleteManyArgs} args - Arguments to filter User_notes to delete.
     * @example
     * // Delete a few User_notes
     * const { count } = await prisma.user_note.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_noteDeleteManyArgs>(args?: SelectSubset<T, user_noteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_noteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_notes
     * const user_note = await prisma.user_note.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_noteUpdateManyArgs>(args: SelectSubset<T, user_noteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_notes and returns the data updated in the database.
     * @param {user_noteUpdateManyAndReturnArgs} args - Arguments to update many User_notes.
     * @example
     * // Update many User_notes
     * const user_note = await prisma.user_note.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_notes and only return the `seq`
     * const user_noteWithSeqOnly = await prisma.user_note.updateManyAndReturn({
     *   select: { seq: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends user_noteUpdateManyAndReturnArgs>(args: SelectSubset<T, user_noteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_notePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_note.
     * @param {user_noteUpsertArgs} args - Arguments to update or create a User_note.
     * @example
     * // Update or create a User_note
     * const user_note = await prisma.user_note.upsert({
     *   create: {
     *     // ... data to create a User_note
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_note we want to update
     *   }
     * })
     */
    upsert<T extends user_noteUpsertArgs>(args: SelectSubset<T, user_noteUpsertArgs<ExtArgs>>): Prisma__user_noteClient<$Result.GetResult<Prisma.$user_notePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_noteCountArgs} args - Arguments to filter User_notes to count.
     * @example
     * // Count the number of User_notes
     * const count = await prisma.user_note.count({
     *   where: {
     *     // ... the filter for the User_notes we want to count
     *   }
     * })
    **/
    count<T extends user_noteCountArgs>(
      args?: Subset<T, user_noteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_noteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_noteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_noteAggregateArgs>(args: Subset<T, User_noteAggregateArgs>): Prisma.PrismaPromise<GetUser_noteAggregateType<T>>

    /**
     * Group by User_note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_noteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_noteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_noteGroupByArgs['orderBy'] }
        : { orderBy?: user_noteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_noteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_noteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_note model
   */
  readonly fields: user_noteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_note.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_noteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends user_dbDefaultArgs<ExtArgs> = {}>(args?: Subset<T, user_dbDefaultArgs<ExtArgs>>): Prisma__user_dbClient<$Result.GetResult<Prisma.$user_dbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_note model
   */
  interface user_noteFieldRefs {
    readonly seq: FieldRef<"user_note", 'Int'>
    readonly user_db_seq: FieldRef<"user_note", 'Int'>
    readonly tell_date: FieldRef<"user_note", 'String'>
    readonly content: FieldRef<"user_note", 'String'>
    readonly del_yn: FieldRef<"user_note", 'String'>
    readonly create_date: FieldRef<"user_note", 'DateTime'>
    readonly update_date: FieldRef<"user_note", 'DateTime'>
    readonly del_date: FieldRef<"user_note", 'DateTime'>
    readonly call_date: FieldRef<"user_note", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_note findUnique
   */
  export type user_noteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_note
     */
    select?: user_noteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_note
     */
    omit?: user_noteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_noteInclude<ExtArgs> | null
    /**
     * Filter, which user_note to fetch.
     */
    where: user_noteWhereUniqueInput
  }

  /**
   * user_note findUniqueOrThrow
   */
  export type user_noteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_note
     */
    select?: user_noteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_note
     */
    omit?: user_noteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_noteInclude<ExtArgs> | null
    /**
     * Filter, which user_note to fetch.
     */
    where: user_noteWhereUniqueInput
  }

  /**
   * user_note findFirst
   */
  export type user_noteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_note
     */
    select?: user_noteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_note
     */
    omit?: user_noteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_noteInclude<ExtArgs> | null
    /**
     * Filter, which user_note to fetch.
     */
    where?: user_noteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_notes to fetch.
     */
    orderBy?: user_noteOrderByWithRelationInput | user_noteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_notes.
     */
    cursor?: user_noteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_notes.
     */
    distinct?: User_noteScalarFieldEnum | User_noteScalarFieldEnum[]
  }

  /**
   * user_note findFirstOrThrow
   */
  export type user_noteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_note
     */
    select?: user_noteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_note
     */
    omit?: user_noteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_noteInclude<ExtArgs> | null
    /**
     * Filter, which user_note to fetch.
     */
    where?: user_noteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_notes to fetch.
     */
    orderBy?: user_noteOrderByWithRelationInput | user_noteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_notes.
     */
    cursor?: user_noteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_notes.
     */
    distinct?: User_noteScalarFieldEnum | User_noteScalarFieldEnum[]
  }

  /**
   * user_note findMany
   */
  export type user_noteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_note
     */
    select?: user_noteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_note
     */
    omit?: user_noteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_noteInclude<ExtArgs> | null
    /**
     * Filter, which user_notes to fetch.
     */
    where?: user_noteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_notes to fetch.
     */
    orderBy?: user_noteOrderByWithRelationInput | user_noteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_notes.
     */
    cursor?: user_noteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_notes.
     */
    distinct?: User_noteScalarFieldEnum | User_noteScalarFieldEnum[]
  }

  /**
   * user_note create
   */
  export type user_noteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_note
     */
    select?: user_noteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_note
     */
    omit?: user_noteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_noteInclude<ExtArgs> | null
    /**
     * The data needed to create a user_note.
     */
    data: XOR<user_noteCreateInput, user_noteUncheckedCreateInput>
  }

  /**
   * user_note createMany
   */
  export type user_noteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_notes.
     */
    data: user_noteCreateManyInput | user_noteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_note createManyAndReturn
   */
  export type user_noteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_note
     */
    select?: user_noteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_note
     */
    omit?: user_noteOmit<ExtArgs> | null
    /**
     * The data used to create many user_notes.
     */
    data: user_noteCreateManyInput | user_noteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_noteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_note update
   */
  export type user_noteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_note
     */
    select?: user_noteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_note
     */
    omit?: user_noteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_noteInclude<ExtArgs> | null
    /**
     * The data needed to update a user_note.
     */
    data: XOR<user_noteUpdateInput, user_noteUncheckedUpdateInput>
    /**
     * Choose, which user_note to update.
     */
    where: user_noteWhereUniqueInput
  }

  /**
   * user_note updateMany
   */
  export type user_noteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_notes.
     */
    data: XOR<user_noteUpdateManyMutationInput, user_noteUncheckedUpdateManyInput>
    /**
     * Filter which user_notes to update
     */
    where?: user_noteWhereInput
    /**
     * Limit how many user_notes to update.
     */
    limit?: number
  }

  /**
   * user_note updateManyAndReturn
   */
  export type user_noteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_note
     */
    select?: user_noteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_note
     */
    omit?: user_noteOmit<ExtArgs> | null
    /**
     * The data used to update user_notes.
     */
    data: XOR<user_noteUpdateManyMutationInput, user_noteUncheckedUpdateManyInput>
    /**
     * Filter which user_notes to update
     */
    where?: user_noteWhereInput
    /**
     * Limit how many user_notes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_noteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_note upsert
   */
  export type user_noteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_note
     */
    select?: user_noteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_note
     */
    omit?: user_noteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_noteInclude<ExtArgs> | null
    /**
     * The filter to search for the user_note to update in case it exists.
     */
    where: user_noteWhereUniqueInput
    /**
     * In case the user_note found by the `where` argument doesn't exist, create a new user_note with this data.
     */
    create: XOR<user_noteCreateInput, user_noteUncheckedCreateInput>
    /**
     * In case the user_note was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_noteUpdateInput, user_noteUncheckedUpdateInput>
  }

  /**
   * user_note delete
   */
  export type user_noteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_note
     */
    select?: user_noteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_note
     */
    omit?: user_noteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_noteInclude<ExtArgs> | null
    /**
     * Filter which user_note to delete.
     */
    where: user_noteWhereUniqueInput
  }

  /**
   * user_note deleteMany
   */
  export type user_noteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_notes to delete
     */
    where?: user_noteWhereInput
    /**
     * Limit how many user_notes to delete.
     */
    limit?: number
  }

  /**
   * user_note without action
   */
  export type user_noteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_note
     */
    select?: user_noteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_note
     */
    omit?: user_noteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_noteInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const User_dbScalarFieldEnum: {
    seq: 'seq',
    name: 'name',
    phone: 'phone',
    into_date: 'into_date',
    into_path: 'into_path',
    notice_car: 'notice_car',
    step: 'step',
    del_yn: 'del_yn',
    create_date: 'create_date',
    update_date: 'update_date',
    del_date: 'del_date'
  };

  export type User_dbScalarFieldEnum = (typeof User_dbScalarFieldEnum)[keyof typeof User_dbScalarFieldEnum]


  export const User_noteScalarFieldEnum: {
    seq: 'seq',
    user_db_seq: 'user_db_seq',
    tell_date: 'tell_date',
    content: 'content',
    del_yn: 'del_yn',
    create_date: 'create_date',
    update_date: 'update_date',
    del_date: 'del_date',
    call_date: 'call_date'
  };

  export type User_noteScalarFieldEnum = (typeof User_noteScalarFieldEnum)[keyof typeof User_noteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type user_dbWhereInput = {
    AND?: user_dbWhereInput | user_dbWhereInput[]
    OR?: user_dbWhereInput[]
    NOT?: user_dbWhereInput | user_dbWhereInput[]
    seq?: IntFilter<"user_db"> | number
    name?: StringNullableFilter<"user_db"> | string | null
    phone?: StringNullableFilter<"user_db"> | string | null
    into_date?: StringNullableFilter<"user_db"> | string | null
    into_path?: StringNullableFilter<"user_db"> | string | null
    notice_car?: StringNullableFilter<"user_db"> | string | null
    step?: StringNullableFilter<"user_db"> | string | null
    del_yn?: StringNullableFilter<"user_db"> | string | null
    create_date?: DateTimeNullableFilter<"user_db"> | Date | string | null
    update_date?: DateTimeNullableFilter<"user_db"> | Date | string | null
    del_date?: DateTimeNullableFilter<"user_db"> | Date | string | null
    user_note?: User_noteListRelationFilter
  }

  export type user_dbOrderByWithRelationInput = {
    seq?: SortOrder
    name?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    into_date?: SortOrderInput | SortOrder
    into_path?: SortOrderInput | SortOrder
    notice_car?: SortOrderInput | SortOrder
    step?: SortOrderInput | SortOrder
    del_yn?: SortOrderInput | SortOrder
    create_date?: SortOrderInput | SortOrder
    update_date?: SortOrderInput | SortOrder
    del_date?: SortOrderInput | SortOrder
    user_note?: user_noteOrderByRelationAggregateInput
  }

  export type user_dbWhereUniqueInput = Prisma.AtLeast<{
    seq?: number
    AND?: user_dbWhereInput | user_dbWhereInput[]
    OR?: user_dbWhereInput[]
    NOT?: user_dbWhereInput | user_dbWhereInput[]
    name?: StringNullableFilter<"user_db"> | string | null
    phone?: StringNullableFilter<"user_db"> | string | null
    into_date?: StringNullableFilter<"user_db"> | string | null
    into_path?: StringNullableFilter<"user_db"> | string | null
    notice_car?: StringNullableFilter<"user_db"> | string | null
    step?: StringNullableFilter<"user_db"> | string | null
    del_yn?: StringNullableFilter<"user_db"> | string | null
    create_date?: DateTimeNullableFilter<"user_db"> | Date | string | null
    update_date?: DateTimeNullableFilter<"user_db"> | Date | string | null
    del_date?: DateTimeNullableFilter<"user_db"> | Date | string | null
    user_note?: User_noteListRelationFilter
  }, "seq">

  export type user_dbOrderByWithAggregationInput = {
    seq?: SortOrder
    name?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    into_date?: SortOrderInput | SortOrder
    into_path?: SortOrderInput | SortOrder
    notice_car?: SortOrderInput | SortOrder
    step?: SortOrderInput | SortOrder
    del_yn?: SortOrderInput | SortOrder
    create_date?: SortOrderInput | SortOrder
    update_date?: SortOrderInput | SortOrder
    del_date?: SortOrderInput | SortOrder
    _count?: user_dbCountOrderByAggregateInput
    _avg?: user_dbAvgOrderByAggregateInput
    _max?: user_dbMaxOrderByAggregateInput
    _min?: user_dbMinOrderByAggregateInput
    _sum?: user_dbSumOrderByAggregateInput
  }

  export type user_dbScalarWhereWithAggregatesInput = {
    AND?: user_dbScalarWhereWithAggregatesInput | user_dbScalarWhereWithAggregatesInput[]
    OR?: user_dbScalarWhereWithAggregatesInput[]
    NOT?: user_dbScalarWhereWithAggregatesInput | user_dbScalarWhereWithAggregatesInput[]
    seq?: IntWithAggregatesFilter<"user_db"> | number
    name?: StringNullableWithAggregatesFilter<"user_db"> | string | null
    phone?: StringNullableWithAggregatesFilter<"user_db"> | string | null
    into_date?: StringNullableWithAggregatesFilter<"user_db"> | string | null
    into_path?: StringNullableWithAggregatesFilter<"user_db"> | string | null
    notice_car?: StringNullableWithAggregatesFilter<"user_db"> | string | null
    step?: StringNullableWithAggregatesFilter<"user_db"> | string | null
    del_yn?: StringNullableWithAggregatesFilter<"user_db"> | string | null
    create_date?: DateTimeNullableWithAggregatesFilter<"user_db"> | Date | string | null
    update_date?: DateTimeNullableWithAggregatesFilter<"user_db"> | Date | string | null
    del_date?: DateTimeNullableWithAggregatesFilter<"user_db"> | Date | string | null
  }

  export type user_noteWhereInput = {
    AND?: user_noteWhereInput | user_noteWhereInput[]
    OR?: user_noteWhereInput[]
    NOT?: user_noteWhereInput | user_noteWhereInput[]
    seq?: IntFilter<"user_note"> | number
    user_db_seq?: IntFilter<"user_note"> | number
    tell_date?: StringNullableFilter<"user_note"> | string | null
    content?: StringNullableFilter<"user_note"> | string | null
    del_yn?: StringNullableFilter<"user_note"> | string | null
    create_date?: DateTimeNullableFilter<"user_note"> | Date | string | null
    update_date?: DateTimeNullableFilter<"user_note"> | Date | string | null
    del_date?: DateTimeNullableFilter<"user_note"> | Date | string | null
    call_date?: DateTimeNullableFilter<"user_note"> | Date | string | null
    user?: XOR<User_dbScalarRelationFilter, user_dbWhereInput>
  }

  export type user_noteOrderByWithRelationInput = {
    seq?: SortOrder
    user_db_seq?: SortOrder
    tell_date?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    del_yn?: SortOrderInput | SortOrder
    create_date?: SortOrderInput | SortOrder
    update_date?: SortOrderInput | SortOrder
    del_date?: SortOrderInput | SortOrder
    call_date?: SortOrderInput | SortOrder
    user?: user_dbOrderByWithRelationInput
  }

  export type user_noteWhereUniqueInput = Prisma.AtLeast<{
    seq?: number
    AND?: user_noteWhereInput | user_noteWhereInput[]
    OR?: user_noteWhereInput[]
    NOT?: user_noteWhereInput | user_noteWhereInput[]
    user_db_seq?: IntFilter<"user_note"> | number
    tell_date?: StringNullableFilter<"user_note"> | string | null
    content?: StringNullableFilter<"user_note"> | string | null
    del_yn?: StringNullableFilter<"user_note"> | string | null
    create_date?: DateTimeNullableFilter<"user_note"> | Date | string | null
    update_date?: DateTimeNullableFilter<"user_note"> | Date | string | null
    del_date?: DateTimeNullableFilter<"user_note"> | Date | string | null
    call_date?: DateTimeNullableFilter<"user_note"> | Date | string | null
    user?: XOR<User_dbScalarRelationFilter, user_dbWhereInput>
  }, "seq">

  export type user_noteOrderByWithAggregationInput = {
    seq?: SortOrder
    user_db_seq?: SortOrder
    tell_date?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    del_yn?: SortOrderInput | SortOrder
    create_date?: SortOrderInput | SortOrder
    update_date?: SortOrderInput | SortOrder
    del_date?: SortOrderInput | SortOrder
    call_date?: SortOrderInput | SortOrder
    _count?: user_noteCountOrderByAggregateInput
    _avg?: user_noteAvgOrderByAggregateInput
    _max?: user_noteMaxOrderByAggregateInput
    _min?: user_noteMinOrderByAggregateInput
    _sum?: user_noteSumOrderByAggregateInput
  }

  export type user_noteScalarWhereWithAggregatesInput = {
    AND?: user_noteScalarWhereWithAggregatesInput | user_noteScalarWhereWithAggregatesInput[]
    OR?: user_noteScalarWhereWithAggregatesInput[]
    NOT?: user_noteScalarWhereWithAggregatesInput | user_noteScalarWhereWithAggregatesInput[]
    seq?: IntWithAggregatesFilter<"user_note"> | number
    user_db_seq?: IntWithAggregatesFilter<"user_note"> | number
    tell_date?: StringNullableWithAggregatesFilter<"user_note"> | string | null
    content?: StringNullableWithAggregatesFilter<"user_note"> | string | null
    del_yn?: StringNullableWithAggregatesFilter<"user_note"> | string | null
    create_date?: DateTimeNullableWithAggregatesFilter<"user_note"> | Date | string | null
    update_date?: DateTimeNullableWithAggregatesFilter<"user_note"> | Date | string | null
    del_date?: DateTimeNullableWithAggregatesFilter<"user_note"> | Date | string | null
    call_date?: DateTimeNullableWithAggregatesFilter<"user_note"> | Date | string | null
  }

  export type user_dbCreateInput = {
    name?: string | null
    phone?: string | null
    into_date?: string | null
    into_path?: string | null
    notice_car?: string | null
    step?: string | null
    del_yn?: string | null
    create_date?: Date | string | null
    update_date?: Date | string | null
    del_date?: Date | string | null
    user_note?: user_noteCreateNestedManyWithoutUserInput
  }

  export type user_dbUncheckedCreateInput = {
    seq?: number
    name?: string | null
    phone?: string | null
    into_date?: string | null
    into_path?: string | null
    notice_car?: string | null
    step?: string | null
    del_yn?: string | null
    create_date?: Date | string | null
    update_date?: Date | string | null
    del_date?: Date | string | null
    user_note?: user_noteUncheckedCreateNestedManyWithoutUserInput
  }

  export type user_dbUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    into_date?: NullableStringFieldUpdateOperationsInput | string | null
    into_path?: NullableStringFieldUpdateOperationsInput | string | null
    notice_car?: NullableStringFieldUpdateOperationsInput | string | null
    step?: NullableStringFieldUpdateOperationsInput | string | null
    del_yn?: NullableStringFieldUpdateOperationsInput | string | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    del_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_note?: user_noteUpdateManyWithoutUserNestedInput
  }

  export type user_dbUncheckedUpdateInput = {
    seq?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    into_date?: NullableStringFieldUpdateOperationsInput | string | null
    into_path?: NullableStringFieldUpdateOperationsInput | string | null
    notice_car?: NullableStringFieldUpdateOperationsInput | string | null
    step?: NullableStringFieldUpdateOperationsInput | string | null
    del_yn?: NullableStringFieldUpdateOperationsInput | string | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    del_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_note?: user_noteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type user_dbCreateManyInput = {
    seq?: number
    name?: string | null
    phone?: string | null
    into_date?: string | null
    into_path?: string | null
    notice_car?: string | null
    step?: string | null
    del_yn?: string | null
    create_date?: Date | string | null
    update_date?: Date | string | null
    del_date?: Date | string | null
  }

  export type user_dbUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    into_date?: NullableStringFieldUpdateOperationsInput | string | null
    into_path?: NullableStringFieldUpdateOperationsInput | string | null
    notice_car?: NullableStringFieldUpdateOperationsInput | string | null
    step?: NullableStringFieldUpdateOperationsInput | string | null
    del_yn?: NullableStringFieldUpdateOperationsInput | string | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    del_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_dbUncheckedUpdateManyInput = {
    seq?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    into_date?: NullableStringFieldUpdateOperationsInput | string | null
    into_path?: NullableStringFieldUpdateOperationsInput | string | null
    notice_car?: NullableStringFieldUpdateOperationsInput | string | null
    step?: NullableStringFieldUpdateOperationsInput | string | null
    del_yn?: NullableStringFieldUpdateOperationsInput | string | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    del_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_noteCreateInput = {
    tell_date?: string | null
    content?: string | null
    del_yn?: string | null
    create_date?: Date | string | null
    update_date?: Date | string | null
    del_date?: Date | string | null
    call_date?: Date | string | null
    user: user_dbCreateNestedOneWithoutUser_noteInput
  }

  export type user_noteUncheckedCreateInput = {
    seq?: number
    user_db_seq: number
    tell_date?: string | null
    content?: string | null
    del_yn?: string | null
    create_date?: Date | string | null
    update_date?: Date | string | null
    del_date?: Date | string | null
    call_date?: Date | string | null
  }

  export type user_noteUpdateInput = {
    tell_date?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    del_yn?: NullableStringFieldUpdateOperationsInput | string | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    del_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    call_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: user_dbUpdateOneRequiredWithoutUser_noteNestedInput
  }

  export type user_noteUncheckedUpdateInput = {
    seq?: IntFieldUpdateOperationsInput | number
    user_db_seq?: IntFieldUpdateOperationsInput | number
    tell_date?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    del_yn?: NullableStringFieldUpdateOperationsInput | string | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    del_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    call_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_noteCreateManyInput = {
    seq?: number
    user_db_seq: number
    tell_date?: string | null
    content?: string | null
    del_yn?: string | null
    create_date?: Date | string | null
    update_date?: Date | string | null
    del_date?: Date | string | null
    call_date?: Date | string | null
  }

  export type user_noteUpdateManyMutationInput = {
    tell_date?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    del_yn?: NullableStringFieldUpdateOperationsInput | string | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    del_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    call_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_noteUncheckedUpdateManyInput = {
    seq?: IntFieldUpdateOperationsInput | number
    user_db_seq?: IntFieldUpdateOperationsInput | number
    tell_date?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    del_yn?: NullableStringFieldUpdateOperationsInput | string | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    del_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    call_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type User_noteListRelationFilter = {
    every?: user_noteWhereInput
    some?: user_noteWhereInput
    none?: user_noteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type user_noteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_dbCountOrderByAggregateInput = {
    seq?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    into_date?: SortOrder
    into_path?: SortOrder
    notice_car?: SortOrder
    step?: SortOrder
    del_yn?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
    del_date?: SortOrder
  }

  export type user_dbAvgOrderByAggregateInput = {
    seq?: SortOrder
  }

  export type user_dbMaxOrderByAggregateInput = {
    seq?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    into_date?: SortOrder
    into_path?: SortOrder
    notice_car?: SortOrder
    step?: SortOrder
    del_yn?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
    del_date?: SortOrder
  }

  export type user_dbMinOrderByAggregateInput = {
    seq?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    into_date?: SortOrder
    into_path?: SortOrder
    notice_car?: SortOrder
    step?: SortOrder
    del_yn?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
    del_date?: SortOrder
  }

  export type user_dbSumOrderByAggregateInput = {
    seq?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type User_dbScalarRelationFilter = {
    is?: user_dbWhereInput
    isNot?: user_dbWhereInput
  }

  export type user_noteCountOrderByAggregateInput = {
    seq?: SortOrder
    user_db_seq?: SortOrder
    tell_date?: SortOrder
    content?: SortOrder
    del_yn?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
    del_date?: SortOrder
    call_date?: SortOrder
  }

  export type user_noteAvgOrderByAggregateInput = {
    seq?: SortOrder
    user_db_seq?: SortOrder
  }

  export type user_noteMaxOrderByAggregateInput = {
    seq?: SortOrder
    user_db_seq?: SortOrder
    tell_date?: SortOrder
    content?: SortOrder
    del_yn?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
    del_date?: SortOrder
    call_date?: SortOrder
  }

  export type user_noteMinOrderByAggregateInput = {
    seq?: SortOrder
    user_db_seq?: SortOrder
    tell_date?: SortOrder
    content?: SortOrder
    del_yn?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
    del_date?: SortOrder
    call_date?: SortOrder
  }

  export type user_noteSumOrderByAggregateInput = {
    seq?: SortOrder
    user_db_seq?: SortOrder
  }

  export type user_noteCreateNestedManyWithoutUserInput = {
    create?: XOR<user_noteCreateWithoutUserInput, user_noteUncheckedCreateWithoutUserInput> | user_noteCreateWithoutUserInput[] | user_noteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_noteCreateOrConnectWithoutUserInput | user_noteCreateOrConnectWithoutUserInput[]
    createMany?: user_noteCreateManyUserInputEnvelope
    connect?: user_noteWhereUniqueInput | user_noteWhereUniqueInput[]
  }

  export type user_noteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<user_noteCreateWithoutUserInput, user_noteUncheckedCreateWithoutUserInput> | user_noteCreateWithoutUserInput[] | user_noteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_noteCreateOrConnectWithoutUserInput | user_noteCreateOrConnectWithoutUserInput[]
    createMany?: user_noteCreateManyUserInputEnvelope
    connect?: user_noteWhereUniqueInput | user_noteWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type user_noteUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_noteCreateWithoutUserInput, user_noteUncheckedCreateWithoutUserInput> | user_noteCreateWithoutUserInput[] | user_noteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_noteCreateOrConnectWithoutUserInput | user_noteCreateOrConnectWithoutUserInput[]
    upsert?: user_noteUpsertWithWhereUniqueWithoutUserInput | user_noteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_noteCreateManyUserInputEnvelope
    set?: user_noteWhereUniqueInput | user_noteWhereUniqueInput[]
    disconnect?: user_noteWhereUniqueInput | user_noteWhereUniqueInput[]
    delete?: user_noteWhereUniqueInput | user_noteWhereUniqueInput[]
    connect?: user_noteWhereUniqueInput | user_noteWhereUniqueInput[]
    update?: user_noteUpdateWithWhereUniqueWithoutUserInput | user_noteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_noteUpdateManyWithWhereWithoutUserInput | user_noteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_noteScalarWhereInput | user_noteScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type user_noteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_noteCreateWithoutUserInput, user_noteUncheckedCreateWithoutUserInput> | user_noteCreateWithoutUserInput[] | user_noteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_noteCreateOrConnectWithoutUserInput | user_noteCreateOrConnectWithoutUserInput[]
    upsert?: user_noteUpsertWithWhereUniqueWithoutUserInput | user_noteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_noteCreateManyUserInputEnvelope
    set?: user_noteWhereUniqueInput | user_noteWhereUniqueInput[]
    disconnect?: user_noteWhereUniqueInput | user_noteWhereUniqueInput[]
    delete?: user_noteWhereUniqueInput | user_noteWhereUniqueInput[]
    connect?: user_noteWhereUniqueInput | user_noteWhereUniqueInput[]
    update?: user_noteUpdateWithWhereUniqueWithoutUserInput | user_noteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_noteUpdateManyWithWhereWithoutUserInput | user_noteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_noteScalarWhereInput | user_noteScalarWhereInput[]
  }

  export type user_dbCreateNestedOneWithoutUser_noteInput = {
    create?: XOR<user_dbCreateWithoutUser_noteInput, user_dbUncheckedCreateWithoutUser_noteInput>
    connectOrCreate?: user_dbCreateOrConnectWithoutUser_noteInput
    connect?: user_dbWhereUniqueInput
  }

  export type user_dbUpdateOneRequiredWithoutUser_noteNestedInput = {
    create?: XOR<user_dbCreateWithoutUser_noteInput, user_dbUncheckedCreateWithoutUser_noteInput>
    connectOrCreate?: user_dbCreateOrConnectWithoutUser_noteInput
    upsert?: user_dbUpsertWithoutUser_noteInput
    connect?: user_dbWhereUniqueInput
    update?: XOR<XOR<user_dbUpdateToOneWithWhereWithoutUser_noteInput, user_dbUpdateWithoutUser_noteInput>, user_dbUncheckedUpdateWithoutUser_noteInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type user_noteCreateWithoutUserInput = {
    tell_date?: string | null
    content?: string | null
    del_yn?: string | null
    create_date?: Date | string | null
    update_date?: Date | string | null
    del_date?: Date | string | null
    call_date?: Date | string | null
  }

  export type user_noteUncheckedCreateWithoutUserInput = {
    seq?: number
    tell_date?: string | null
    content?: string | null
    del_yn?: string | null
    create_date?: Date | string | null
    update_date?: Date | string | null
    del_date?: Date | string | null
    call_date?: Date | string | null
  }

  export type user_noteCreateOrConnectWithoutUserInput = {
    where: user_noteWhereUniqueInput
    create: XOR<user_noteCreateWithoutUserInput, user_noteUncheckedCreateWithoutUserInput>
  }

  export type user_noteCreateManyUserInputEnvelope = {
    data: user_noteCreateManyUserInput | user_noteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type user_noteUpsertWithWhereUniqueWithoutUserInput = {
    where: user_noteWhereUniqueInput
    update: XOR<user_noteUpdateWithoutUserInput, user_noteUncheckedUpdateWithoutUserInput>
    create: XOR<user_noteCreateWithoutUserInput, user_noteUncheckedCreateWithoutUserInput>
  }

  export type user_noteUpdateWithWhereUniqueWithoutUserInput = {
    where: user_noteWhereUniqueInput
    data: XOR<user_noteUpdateWithoutUserInput, user_noteUncheckedUpdateWithoutUserInput>
  }

  export type user_noteUpdateManyWithWhereWithoutUserInput = {
    where: user_noteScalarWhereInput
    data: XOR<user_noteUpdateManyMutationInput, user_noteUncheckedUpdateManyWithoutUserInput>
  }

  export type user_noteScalarWhereInput = {
    AND?: user_noteScalarWhereInput | user_noteScalarWhereInput[]
    OR?: user_noteScalarWhereInput[]
    NOT?: user_noteScalarWhereInput | user_noteScalarWhereInput[]
    seq?: IntFilter<"user_note"> | number
    user_db_seq?: IntFilter<"user_note"> | number
    tell_date?: StringNullableFilter<"user_note"> | string | null
    content?: StringNullableFilter<"user_note"> | string | null
    del_yn?: StringNullableFilter<"user_note"> | string | null
    create_date?: DateTimeNullableFilter<"user_note"> | Date | string | null
    update_date?: DateTimeNullableFilter<"user_note"> | Date | string | null
    del_date?: DateTimeNullableFilter<"user_note"> | Date | string | null
    call_date?: DateTimeNullableFilter<"user_note"> | Date | string | null
  }

  export type user_dbCreateWithoutUser_noteInput = {
    name?: string | null
    phone?: string | null
    into_date?: string | null
    into_path?: string | null
    notice_car?: string | null
    step?: string | null
    del_yn?: string | null
    create_date?: Date | string | null
    update_date?: Date | string | null
    del_date?: Date | string | null
  }

  export type user_dbUncheckedCreateWithoutUser_noteInput = {
    seq?: number
    name?: string | null
    phone?: string | null
    into_date?: string | null
    into_path?: string | null
    notice_car?: string | null
    step?: string | null
    del_yn?: string | null
    create_date?: Date | string | null
    update_date?: Date | string | null
    del_date?: Date | string | null
  }

  export type user_dbCreateOrConnectWithoutUser_noteInput = {
    where: user_dbWhereUniqueInput
    create: XOR<user_dbCreateWithoutUser_noteInput, user_dbUncheckedCreateWithoutUser_noteInput>
  }

  export type user_dbUpsertWithoutUser_noteInput = {
    update: XOR<user_dbUpdateWithoutUser_noteInput, user_dbUncheckedUpdateWithoutUser_noteInput>
    create: XOR<user_dbCreateWithoutUser_noteInput, user_dbUncheckedCreateWithoutUser_noteInput>
    where?: user_dbWhereInput
  }

  export type user_dbUpdateToOneWithWhereWithoutUser_noteInput = {
    where?: user_dbWhereInput
    data: XOR<user_dbUpdateWithoutUser_noteInput, user_dbUncheckedUpdateWithoutUser_noteInput>
  }

  export type user_dbUpdateWithoutUser_noteInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    into_date?: NullableStringFieldUpdateOperationsInput | string | null
    into_path?: NullableStringFieldUpdateOperationsInput | string | null
    notice_car?: NullableStringFieldUpdateOperationsInput | string | null
    step?: NullableStringFieldUpdateOperationsInput | string | null
    del_yn?: NullableStringFieldUpdateOperationsInput | string | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    del_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_dbUncheckedUpdateWithoutUser_noteInput = {
    seq?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    into_date?: NullableStringFieldUpdateOperationsInput | string | null
    into_path?: NullableStringFieldUpdateOperationsInput | string | null
    notice_car?: NullableStringFieldUpdateOperationsInput | string | null
    step?: NullableStringFieldUpdateOperationsInput | string | null
    del_yn?: NullableStringFieldUpdateOperationsInput | string | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    del_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_noteCreateManyUserInput = {
    seq?: number
    tell_date?: string | null
    content?: string | null
    del_yn?: string | null
    create_date?: Date | string | null
    update_date?: Date | string | null
    del_date?: Date | string | null
    call_date?: Date | string | null
  }

  export type user_noteUpdateWithoutUserInput = {
    tell_date?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    del_yn?: NullableStringFieldUpdateOperationsInput | string | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    del_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    call_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_noteUncheckedUpdateWithoutUserInput = {
    seq?: IntFieldUpdateOperationsInput | number
    tell_date?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    del_yn?: NullableStringFieldUpdateOperationsInput | string | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    del_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    call_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_noteUncheckedUpdateManyWithoutUserInput = {
    seq?: IntFieldUpdateOperationsInput | number
    tell_date?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    del_yn?: NullableStringFieldUpdateOperationsInput | string | null
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    del_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    call_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}