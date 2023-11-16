import axios from 'axios'
import { useMutation, useQuery } from 'react-query'
import { useContext } from 'react'
import { GlobalBillContext } from '../context/GlobalContexts'
const storeApiPath = 'http://localhost:5000'
export interface user {
  id: string
  email: string
  username: string
  mobile: string
  password: string
}
async function createUser(data: user, context: { jwt: any } | null) {
  const jwt = context?.jwt
  const config = {
    headers: {
      Authorization: `Authorization ${jwt}`,
    },
  }
  const res = { data }
  console.log(res)
  return axios.post(`${storeApiPath}/api/user/register`, res, config)
}

const getusers = async (context: { jwt: any } | null) => {
  const jwt = context?.jwt
  const config = {
    headers: {
      Authorization: `Authorization ${jwt}`,
    },
  }
  return axios.get(`${storeApiPath}/api/user/getAllUsers`, config)
}

// const getuserById = async (id: any, context: any) => {
//   const { jwt } = await getJWT()
//   const config = {
//     headers: {
//       Authorization: `Bearer ${jwt}`,
//     },
//   }
//   return axios.get(`${storeApiPath}/api/users/${id}`, config)
// }

// // const searchusers = async (query: any, context: { store: { id: any } }) => {
// //   const { jwt } = await getJWT()
// //   const config = {
// //     headers: {
// //       Authorization: `Bearer ${jwt}`,
// //     },
// //   }
// //   return axios.get(
// //     `${storeApiPath}/api/users/${context?.store.id}/search/${query}`,
// //     config,
// //   )
// // }

export const useCreateUser = (onSuccess: any, onError: any) => {
  const context = useContext(GlobalBillContext)
  return useMutation((data: user) => createUser(data, context), {
    onError: onError,
    onSuccess: onSuccess,
  })
}

// async function updateuser(data: user, id: string) {
//   const { jwt } = await getJWT()
//   const config = {
//     headers: {
//       Authorization: `Bearer ${jwt}`,
//     },
//   }
//   return axios.put(`${storeApiPath}/api/users/${id}`, data, config)
// }

export const useGetusers = (onSuccess: any, onError: any, page: string) => {
  const context = useContext(GlobalBillContext)
  return useQuery(['get-user', page, context], () => getusers(context), {
    onError: onError,
    onSuccess: onSuccess,
    staleTime: 10 * (60 * 1000),
  })
}

// export const useGetCustomerById = (id: any) => {
//   console.log(id)
//   const context = useContext(GlobalBillContext)
//   return useQuery('get-customer-by-id', () => getCustomerById(id, context), {
//     enabled: !!id && !!context?.store,
//     staleTime: 10 * (60 * 1000),
//   })
// }

// export const useSearchCustomer = (query: any) => {
//   const context = useContext(GlobalBillContext)
//   return useQuery('search-customer', () => searchCustomers(query, context), {
//     enabled: !!query && !!context?.store,
//     staleTime: 0,
//     retry: false,
//   })
// }

// export const useUpdateCustomer = (
//   onSuccess: any,
//   onError: any,
//   customerId: string,
// ) => {
//   return useMutation((data: customer) => updateCustomer(data, customerId), {
//     onSuccess: onSuccess,
//     onError: onError,
//   })
// }
