export type TokenType = object;

export type DerivativeFunc<DesignToekn extends TokenType,DerivativeToken extends TokenType> = (
  designToken: DesignToekn,
  derivativeToken?: DerivativeToken,
) => DerivativeToken
