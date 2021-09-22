import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { listBoothDetails } from '../../../Action/BoothAction'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import FilterListIcon from '@mui/icons-material/FilterList';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.red,
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

export default function BoothVoterList( props) {
    const { data } = props
    console.log(data)
    const dispatch = useDispatch();
    const voterBooth = useSelector((state) => state.voterBooth)
    const { dataCol } = voterBooth
    useEffect(() => {
        dispatch(listBoothDetails(data))
    }, [dispatch])
    console.log(dataCol.voter.length)
    
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Voter Name</StyledTableCell>
                        <StyledTableCell align="right">Voter Id</StyledTableCell>
                        <StyledTableCell align="right">Age</StyledTableCell>
                        <StyledTableCell align="right">Gender</StyledTableCell>
                        <StyledTableCell align="right">Relation</StyledTableCell>
                        <StyledTableCell align="right">Contact No</StyledTableCell>
                        <StyledTableCell align="right">UML  </StyledTableCell>
                        <StyledTableCell align="right">No </StyledTableCell>
                        <StyledTableCell align="right">Maybe </StyledTableCell>
                        <StyledTableCell align="right">ABC Party </StyledTableCell>
                        <StyledTableCell align="right">OtherParty </StyledTableCell>

                    </TableRow>
                </TableHead>
                {dataCol.voter.length > 0 ? (
                    <TableBody>
                        {
                            dataCol.voter.map((row) => (

                                <StyledTableRow key={row._id}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.length}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{row.voterId}</StyledTableCell>
                                    <StyledTableCell align="right">{row.age}</StyledTableCell>
                                    <StyledTableCell align="right">{row.sex}</StyledTableCell>
                                    <StyledTableCell align="right">{row.relation}</StyledTableCell>
                                    <StyledTableCell align="right">{row.contact}</StyledTableCell>
                                    <StyledTableCell align="right">{row.yes}</StyledTableCell>
                                    <StyledTableCell align="right">{row.no}</StyledTableCell>
                                    <StyledTableCell align="right">{row.maybe}</StyledTableCell>
                                    <StyledTableCell align="right">{row.abcParty}</StyledTableCell>
                                    <StyledTableCell align="right">{row.otherParty}</StyledTableCell>

                                </StyledTableRow>
                            ))
                        }
                    </TableBody>
                ) : (
                        <p> No Voter List is to Show </p>
                )
                }
                
            </Table>
        </TableContainer>
    );
}
