// import React from 'react'

// const AllPlace = () => {
//     return (
//         <div>
//             list is here
//         </div>
//     )
// }


// export default AllPlace


import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { listAllPlace } from '../../../Action/addPlaceAction'
import { useDispatch, useSelector } from 'react-redux';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default function AllPlace() {

    const dispatch = useDispatch();
    const placeList = useSelector((state) => state.placeList)
    const { places} = placeList
    useEffect(() => {
        dispatch(listAllPlace())
    }, [dispatch])
    console.log(places)
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Team Member</StyledTableCell>
                        <StyledTableCell align="right">Provison  </StyledTableCell>
                        <StyledTableCell align="right">District</StyledTableCell>
                        <StyledTableCell align="right">Federal Constituency</StyledTableCell>
                        <StyledTableCell align="right">Provison Constituency</StyledTableCell>
                        <StyledTableCell align="right">Localbody</StyledTableCell>
                        <StyledTableCell align="right">Ward</StyledTableCell>
                        <StyledTableCell align="right">Booth </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {places.map((row) => (
                        <StyledTableRow key={row._id}>
                            <StyledTableCell component="th" scope="row">
                                {row.user.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.provision}</StyledTableCell>
                            <StyledTableCell align="right">{row.district}</StyledTableCell>
                            <StyledTableCell align="right">{row.fedConstituency}</StyledTableCell>
                            <StyledTableCell align="right">{row.provConstituency}</StyledTableCell>
                            <StyledTableCell align="right">{row.localBody}</StyledTableCell>

                            <StyledTableCell align="right">{row.ward}</StyledTableCell>
                            
                            <StyledTableCell align="right">{row.booth.map((data) => (data)
                            )}</StyledTableCell>
                            {/* {row.booth.map((data) => (<StyledTableCell align="right">{data}</StyledTableCell>)
                            )} */}
                            

                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
