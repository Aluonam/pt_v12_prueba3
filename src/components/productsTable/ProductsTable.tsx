import { useEffect, useState } from "react";

export interface productPropsType {
    id : number;
    title : string;
    price: number;
    description: string;
}

const ProductTable = () => {


    const [dataProducts, setDataProducts] = useState<productPropsType[]>([])

    useEffect(() => {
     callProducts()
    }, [])
    
    const callProducts = async ()=>{
        try{
            const call = await fetch(`https://fakestoreapi.com/products?limit=5`);
            const data = await call.json()
            setDataProducts(data)
        }catch(err){console.log(err, 'error detected')}
    }

    const tableData = dataProducts?.map((product : productPropsType)=>{
        return(
            <>
           
        <tbody>
            <tr>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
            </tr>
        </tbody>
            </>
           
        )
    })

    return (
        <>
        <table>
        <thead>
            <tr>
                <th>id</th>
                <th>title</th>
                <th>price</th>
                <th>description</th>
            </tr>
        </thead>
        {tableData}
        </table>
        
        </>
    )
  };
  
  export default ProductTable;