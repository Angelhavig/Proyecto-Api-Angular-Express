"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteComentarioEmpresa = exports.getComentariosEmpresa = exports.putEmpresa = exports.postComentarioEmpresa = exports.getEmpresaE = exports.getEmpresa = exports.getEmpresas = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const getEmpresas = (req, res) => {
    connection_1.default.query('SELECT * FROM empresa', (err, data) => {
        if (err) {
            console.error('Error al obtener empresa:', err);
            res.status(500).json({ msg: 'Error al obtener empresa' });
        }
        else {
            res.json(data);
        }
    });
};
exports.getEmpresas = getEmpresas;
const getEmpresa = (req, res) => {
    const { id } = req.params;
    const { titulo_Empresa } = req.params;
    console.log(id);
    console.log(titulo_Empresa);
    connection_1.default.query('SELECT * FROM empresa WHERE id = ? and Titulo_Empresa = ?', [id, titulo_Empresa], (err, data) => {
        if (err) {
            console.error('Error al obtener el blog:', err);
            res.status(500).json({ msg: 'Error al obtener el blog' });
        }
        else {
            if (data && data.length > 0) {
                res.json(data[0]); // Responder con el primer registro encontrado (debería ser único por ID)
            }
            else {
                res.status(404).json({ msg: 'Blog no encontrado' }); // Si no se encontraron resultados
            }
        }
    });
};
exports.getEmpresa = getEmpresa;
const getEmpresaE = (req, res) => {
    const { id } = req.params;
    console.log(id);
    connection_1.default.query('SELECT * FROM empresa WHERE id = ? ', id, (err, data) => {
        if (err) {
            console.error('Error al obtener el blog:', err);
            res.status(500).json({ msg: 'Error al obtener el blog' });
        }
        else {
            if (data && data.length > 0) {
                res.json(data[0]); // Responder con el primer registro encontrado (debería ser único por ID)
            }
            else {
                res.status(404).json({ msg: 'Blog no encontrado' }); // Si no se encontraron resultados
            }
        }
    });
};
exports.getEmpresaE = getEmpresaE;
const postComentarioEmpresa = (req, res) => {
    const { body } = req;
    connection_1.default.query('INSERT INTO empresa SET ?', [body], (err, data) => {
        if (err) {
            console.error('Error al insertar el comentario:', err);
            res.status(500).json({ msg: 'Error al insertar el comentario' });
        }
        else {
            res.json({
                msg: 'Comentario registrado'
            });
        }
    });
};
exports.postComentarioEmpresa = postComentarioEmpresa;
const putEmpresa = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('UPDATE empresa SET ? WHERE id = ?', [body, id], (err, data) => {
        if (err) {
            console.error('Error al actualizar empresa:', err);
            res.status(500).json({ msg: 'Error al insertar empresa' });
        }
        else {
            res.json({
                msg: 'Empresa Actualizada'
            });
        }
    });
};
exports.putEmpresa = putEmpresa;
const getComentariosEmpresa = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('SELECT * FROM comentario_empresa WHERE id_empresa = ?', id, (err, data) => {
        if (err) {
            console.error('Error al obtener empresa:', err);
            res.status(500).json({ msg: 'Error al obtener empresa' });
        }
        else {
            res.json(data);
        }
    });
};
exports.getComentariosEmpresa = getComentariosEmpresa;
const DeleteComentarioEmpresa = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('DELETE FROM comentario_empresa WHERE id = ?', id, (err, data) => {
        if (err) {
            console.error('Error al obtener empresa:', err);
            res.status(500).json({ msg: 'Error al obtener empresa' });
        }
        else {
            res.json(data);
        }
    });
};
exports.DeleteComentarioEmpresa = DeleteComentarioEmpresa;
