import { TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react"
import { AppContext } from '../Context/AppContext';
import { useContext, useEffect, useState } from "react"
import axios from "axios";


function UserData() {

    const VALUE = useContext(AppContext)

    const [oldArr, setArr] = useState([])

    function GetVal() {
        return axios.get('https://63fb36244e024687bf741bbc.mockapi.io/Users')
    }



    useEffect(() => {

        GetVal()

            .then((data) => {
                setArr(data.data)
            })
            .catch((err) => { console.log(err) })
    }, [])




    function DELETE(id) {
        axios.delete(`https://63fb36244e024687bf741bbc.mockapi.io/Users/${id}`)

       return  axios.get(`https://63fb36244e024687bf741bbc.mockapi.io/Users`)
       .then((data) => {
           setArr(data.data)
       })
       .catch((err) => { console.log(err) })

    }

    // useEffect(() => {
    //     GetVal()

    //         .then((data) => {
    //             setArr(data.data)
    //         })
    //         .catch((err) => { console.log(err) })
    // }, DELETE)

    return (
        <TableContainer onMouseEnter={() => { VALUE.setDoHover(false); VALUE.setDoHover1(false) }}>
            <Table variant='striped' colorScheme='teal'>
                {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                <Thead>
                    <Tr>
                        <Th>Users</Th>
                        <Th>ID</Th>
                        <Th isNumeric>Delete</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {oldArr.map((ele) => {
                        return (
                            <Tr key={ele.id}>
                                <Td>{ele.name}</Td>
                                <Td>{ele.id}</Td>
                                <Td isNumeric><button onClick={() => DELETE(ele.id)}>Delete</button></Td>
                            </Tr>

                        )
                    })}

                </Tbody>

            </Table>
        </TableContainer>
    )

}

export default UserData