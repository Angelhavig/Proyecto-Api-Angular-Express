"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blog_controller_1 = require("../controllers/blog.controller");
const empresa_controller_1 = require("../controllers/empresa.controller");
const comentario_controller_1 = require("../controllers/comentario.controller");
const router = (0, express_1.Router)();
//Usuario
//Blog
router.get('/blog/', blog_controller_1.getBlogs);
router.get('/blog/:id/:titulo_Blog', blog_controller_1.getBlog);
router.delete('/blog/:id', blog_controller_1.deleteBlog);
router.get('/blogE/:id', blog_controller_1.getBlogE);
router.put('/blog/:id', blog_controller_1.putBlog);
router.post('/blog/', blog_controller_1.postBlog);
router.trace('/blog/', blog_controller_1.traceBlog);
router.head('/blog/', blog_controller_1.headBlog);
router.link('/blog/', blog_controller_1.linkBlog);
//Comentarios Blog
router.get('/blogComentario/:id', comentario_controller_1.getComentariosBlog);
router.delete('/blogComentario/:id', comentario_controller_1.DeleteBlogComentario);
router.post('/blogComentario/', comentario_controller_1.postComentarioBlog);
//Empresa
router.get('/empresa/', empresa_controller_1.getEmpresas);
router.get('/empresa/:id/:titulo_Empresa', empresa_controller_1.getEmpresa);
router.put('/empresa/:id', empresa_controller_1.putEmpresa);
router.get('/empresaE/:id', empresa_controller_1.getEmpresaE);
//Comentarios Empresas
router.get('/empresa/:id', empresa_controller_1.getComentariosEmpresa);
router.delete('/empresa/:id', empresa_controller_1.DeleteComentarioEmpresa);
router.post('/empresa/', empresa_controller_1.postComentarioEmpresa);
exports.default = router;
