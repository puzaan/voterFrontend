import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { listAllBooth } from '../../../Action/BoothAction'
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

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function AllBoothDetail() {

    const dispatch = useDispatch();
    const boothList = useSelector((state) => state.boothList)
    const { booths } = boothList
    useEffect(() => {
        dispatch(listAllBooth())
    }, [dispatch])
    console.log(booths)
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Booth Name</StyledTableCell>
                        <StyledTableCell align="right">UML</StyledTableCell>
                        <StyledTableCell align="right">May-be</StyledTableCell>
                        <StyledTableCell align="right">No</StyledTableCell>
                        <StyledTableCell align="right">abc</StyledTableCell>
                        {/* <StyledTableCell align="right">AMLA</StyledTableCell> */}
                        <StyledTableCell align="right">other</StyledTableCell>
                        <StyledTableCell align="right">Total voter </StyledTableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {booths.map((row) => (
                        <StyledTableRow key={row.boothName}>
                            <StyledTableCell component="th" scope="row">
                                {row.boothName}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.yes}</StyledTableCell>
                            <StyledTableCell align="right">{row.maybe}</StyledTableCell>
                            <StyledTableCell align="right">{row.no}</StyledTableCell>
                            <StyledTableCell align="right">{row.abc}</StyledTableCell>
                            {/* <StyledTableCell align="right">{row.amla}</StyledTableCell> */}
                            <StyledTableCell align="right">{row.other}</StyledTableCell>
                            <StyledTableCell align="right">{row.totalVoter}</StyledTableCell>

                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
