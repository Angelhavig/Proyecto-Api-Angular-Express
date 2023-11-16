import { Request, Response } from "express";
import connection from "../db/connection";

export const getComentariosBlog = (req: Request, res: Response) => {
    const {id} = req.params;

    connection.query('SELECT * FROM comentario_blog WHERE id_blog = ?',id, (err, data) => {
        if (err) {
            console.error('Error al obtener comentarios:', err);
            res.status(500).json({ msg: 'Error al obtener comentarios' });
        } else {
            res.json(data);
        }
    });
};

export const postComentarioBlog = (req: Request, res: Response) => {
    const { body } = req;

    connection.query('INSERT INTO comentario_blog SET ?', [body], (err, data) => {
        if (err) {
            console.error('Error al insertar el comentario:', err);
            res.status(500).json({ msg: 'Error al insertar el comentario' });
        } else {
            res.json({
                msg: 'Comentario registrado'
            });
        }
    });
};


export const DeleteBlogComentario = (req: Request, res: Response) => {
    const {id} = req.params;

    connection.query('DELETE FROM comentario_blog WHERE id = ? ',id, (err, data) => {
        if (err) {
            console.error('Error al obtener comentarios:', err);
            res.status(500).json({ msg: 'Error al obtener comentarios' });
        } else {
            res.json(data);
        }
    });
};



