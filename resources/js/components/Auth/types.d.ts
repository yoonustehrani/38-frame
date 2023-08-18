type DispatchAction<AType, PType> = {type: AType, payload: PType}

type CredentialsAction = DispatchAction<"SET_EMAIL"| "SET_PASSWORD", string>

interface AuthFormState {
    email: null | string
    password: null | string
}