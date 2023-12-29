const baseURL= "http://localhost:5100/"

const bikes="bikes"
const statistics=`${bikes}/statistics`

const urls={
    bikes:{
        base:bikes,
        byId:(id:string):string =>`${bikes}/${id}`
    },
    statistics:statistics
}

export {baseURL,urls}
