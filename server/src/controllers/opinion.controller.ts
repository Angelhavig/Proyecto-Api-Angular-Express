import { Request, Response } from "express";
import connection from "../db/connection";

export const getComentariosEmpresa = (req: Request, res: Response) => {
    const {id} = req.params;

    connection.query('SELECT * FROM empresa WHERE id = ?',id, (err, data) => {
        if (err) {
            console.error('Error al obtener empresa:', err);
            res.status(500).json({ msg: 'Error al obtener empresa' });
        } else {
            res.json(data);
        }
    });
};

export const postComentarioEmpresa = (req: Request, res: Response) => {
    const { body } = req;

    connection.query('INSERT INTO empresa SET ?', [body], (err, data) => {
        if (err) {
            console.error('Error al insertar el empresa:', err);
            res.status(500).json({ msg: 'Error al insertar el empresa' });
        } else {
            res.json({
                msg: 'empresa registrado'
            });
        }
    });
};


export const DeleteBlogEmpresa = (req: Request, res: Response) => {
    const {id} = req.params;

    connection.query('DELETE FROM empresa WHERE id = ?',id, (err, data) => {
        if (err) {
            console.error('Error al obtener empresa:', err);
            res.status(500).json({ msg: 'Error al obtener empresa' });
        } else {
            res.json(data);
        }
    });
};