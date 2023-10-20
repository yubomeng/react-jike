// 封装高阶组件
// 有无token 有token 正常跳转， 无token 登录

const { getToken } = require("@/utils");
const { Navigate } = require("react-router-dom");

 export function AuthRoute ({ children }) {
    const token = getToken()
    if (token) {
        return <>{children}</>
    } else {
        return <Navigate to={'/login'} replace />
    }
}