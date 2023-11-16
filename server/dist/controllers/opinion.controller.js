"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteBlogEmpresa = exports.postComentarioEmpresa = exports.getComentariosEmpresa = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const getComentariosEmpresa = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('SELECT * FROM empresa WHERE id = ?', id, (err, data) => {
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
const postComentarioEmpresa = (req, res) => {
    const { body } = req;
    connection_1.default.query('INSERT INTO empresa SET ?', [body], (err, data) => {
        if (err) {
            console.error('Error al insertar el empresa:', err);
            res.status(500).json({ msg: 'Error al insertar el empresa' });
        }
        else {
            res.json({
                msg: 'empresa registrado'
            });
        }
    });
};
exports.postComentarioEmpresa = postComentarioEmpresa;
const DeleteBlogEmpresa = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('DELETE FROM empresa WHERE id = ?', id, (err, data) => {
        if (err) {
            console.error('Error al obtener empresa:', err);
            res.status(500).json({ msg: 'Error al obtener empresa' });
        }
        else {
            res.json(data);
        }
    });
};
exports.DeleteBlogEmpresa = DeleteBlogEmpresa;
