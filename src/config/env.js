import dot from 'dotenv'
import envvar from 'env-var'

dot.config()

export const envs = {
    PORT: envvar.get('PORT').required().asPortNumber(),
    PUBLIC_PATH: envvar.get('PUBLIC_PATH').default('public').asString()
}