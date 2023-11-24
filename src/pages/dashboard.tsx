// interface IGetServerSideProps {}

// export const getServerSideProps: IGetServerSideProps = async (ctx) => {
//   const { ["nextauth.token"]: token } = parseCookies(ctx)

//   if (!token) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     }
//   }

//   return {
//     props: {},
//   }
// }
