import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";

const TableForm = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <Container>
                <h1>Table</h1>
            </Container>
        </div>
    );
};