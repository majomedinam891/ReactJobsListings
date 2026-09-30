import { ClipLoader } from "react-spinners"

const override = {
    display: "block",
    margin: "100px auto"
}

const Spinner = ({cargando}) => {
  return (
    <ClipLoader
        color="#4338ca"
        loading={cargando}
        cssOverride={override}
        size={150}
    />
  )
}

export default Spinner
