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
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import FilterListIcon from '@mui/icons-material/FilterList';
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
                        <StyledTableCell align="right">other</StyledTableCell>
                        <StyledTableCell align="right">Total voter </StyledTableCell>
                        <StyledTableCell align="right">Voter Option  </StyledTableCell>

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
                            
                            <StyledTableCell align="right">{row.other}</StyledTableCell>
                            <StyledTableCell align="right">{row.totalVoter}</StyledTableCell>
                            <StyledTableCell align="right">
                                <Link style={{textDecoration: 'none' }} ><AddIcon /></Link>
                                <Link style={{ textDecoration: 'none' }} to={`/boothVooter/${row._id}`}> <FilterListIcon /> </Link>
                            </StyledTableCell>

                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
