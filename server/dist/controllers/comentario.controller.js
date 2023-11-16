"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteBlogComentario = exports.postComentarioBlog = exports.getComentariosBlog = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const getComentariosBlog = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('SELECT * FROM comentario_blog WHERE id_blog = ?', id, (err, data) => {
        if (err) {
            console.error('Error al obtener comentarios:', err);
            res.status(500).json({ msg: 'Error al obtener comentarios' });
        }
        else {
            res.json(data);
        }
    });
};
exports.getComentariosBlog = getComentariosBlog;
const postComentarioBlog = (req, res) => {
    const { body } = req;
    connection_1.default.query('INSERT INTO comentario_blog SET ?', [body], (err, data) => {
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
exports.postComentarioBlog = postComentarioBlog;
const DeleteBlogComentario = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('DELETE FROM comentario_blog WHERE id = ? ', id, (err, data) => {
        if (err) {
            console.error('Error al obtener comentarios:', err);
            res.status(500).json({ msg: 'Error al obtener comentarios' });
        }
        else {
            res.json(data);
        }
    });
};
exports.DeleteBlogComentario = DeleteBlogComentario;
