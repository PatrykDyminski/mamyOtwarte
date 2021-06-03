const correct = process.env.VERIFY
export default function Home({ a }) {
  if(a){
    return (
      <h1>Zalogowano</h1>
    )
  }
  else {
    return(
      <h1>Niezalogowano</h1>  
    )
  }
}

export async function getStaticProps({ params }) {
  if (params.auth == correct) {
    return {
      props: {
        a: true
      },
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: [{ 
      params: { 
        auth: correct 
      } 
    }],
    fallback: false
  }
}