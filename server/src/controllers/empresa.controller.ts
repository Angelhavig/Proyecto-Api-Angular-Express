import { Request, Response } from "express";
import connection from "../db/connection";

export const getEmpresas = (req: Request, res: Response) => {
    connection.query('SELECT * FROM empresa', (err, data) => {
        if (err) {
            console.error('Error al obtener empresa:', err);
            res.status(500).json({ msg: 'Error al obtener empresa' });
        } else {
            res.json(data);
        }
    });
};

export const getEmpresa = (req: Request, res: Response) => {
    const { id } = req.params;
    const { titulo_Empresa } = req.params;

    console.log(id);
    console.log(titulo_Empresa);

    connection.query('SELECT * FROM empresa WHERE id = ? and Titulo_Empresa = ?', [id,titulo_Empresa], (err, data) => {
        if (err) {
            console.error('Error al obtener el blog:', err);
            res.status(500).json({ msg: 'Error al obtener el blog' });
        } else {
            if (data && data.length > 0) {
                res.json(data[0]); // Responder con el primer registro encontrado (debería ser único por ID)
            } else {
                res.status(404).json({ msg: 'Blog no encontrado' }); // Si no se encontraron resultados
            }
        }
    });
};


export const getEmpresaE = (req: Request, res: Response) => {
    const { id } = req.params;

    console.log(id);

    connection.query('SELECT * FROM empresa WHERE id = ? ', id, (err, data) => {
        if (err) {
            console.error('Error al obtener el blog:', err);
            res.status(500).json({ msg: 'Error al obtener el blog' });
        } else {
            if (data && data.length > 0) {
                res.json(data[0]); // Responder con el primer registro encontrado (debería ser único por ID)
            } else {
                res.status(404).json({ msg: 'Blog no encontrado' }); // Si no se encontraron resultados
            }
        }
    });
};


export const postComentarioEmpresa = (req: Request, res: Response) => {
    const { body } = req;

    connection.query('INSERT INTO empresa SET ?', [body], (err, data) => {
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

export const putEmpresa = (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    connection.query('UPDATE empresa SET ? WHERE id = ?', [body, id], (err, data) => {
        if (err) {
            console.error('Error al actualizar empresa:', err);
            res.status(500).json({ msg: 'Error al insertar empresa' });
        } else {
            res.json({
                msg: 'Empresa Actualizada'
            });
        }
    });
};

export const getComentariosEmpresa = (req: Request, res: Response) => {
    const {id} = req.params;

    connection.query('SELECT * FROM comentario_empresa WHERE id_empresa = ?',id, (err, data) => {
        if (err) {
            console.error('Error al obtener empresa:', err);
            res.status(500).json({ msg: 'Error al obtener empresa' });
        } else {
            res.json(data);
        }
    });
};

export const DeleteComentarioEmpresa = (req: Request, res: Response) => {
    const {id} = req.params;

    connection.query('DELETE FROM comentario_empresa WHERE id = ?',id, (err, data) => {
        if (err) {
            console.error('Error al obtener empresa:', err);
            res.status(500).json({ msg: 'Error al obtener empresa' });
        } else {
            res.json(data);
        }
    });
};
