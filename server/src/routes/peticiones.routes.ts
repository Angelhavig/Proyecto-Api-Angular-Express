import { Router } from "express";
import { deleteBlog, getBlog, getBlogE, getBlogs, headBlog, linkBlog, postBlog, putBlog, traceBlog } from "../controllers/blog.controller";
import { DeleteComentarioEmpresa, getComentariosEmpresa, getEmpresa, getEmpresaE, getEmpresas, postComentarioEmpresa, putEmpresa } from "../controllers/empresa.controller";
import { DeleteBlogComentario, getComentariosBlog, postComentarioBlog } from "../controllers/comentario.controller";
import { DeleteBlogEmpresa } from "../controllers/opinion.controller";

const router = Router();

//Usuario


//Blog

router.get('/blog/', getBlogs);
router.get('/blog/:id/:titulo_Blog', getBlog);
router.delete('/blog/:id', deleteBlog);

router.get('/blogE/:id', getBlogE);

router.put('/blog/:id', putBlog);

router.post('/blog/', postBlog);

router.trace('/blog/', traceBlog);
router.head('/blog/', headBlog);
router.link('/blog/', linkBlog);
//Comentarios Blog
router.get('/blogComentario/:id', getComentariosBlog);
router.delete('/blogComentario/:id', DeleteBlogComentario);
router.post('/blogComentario/', postComentarioBlog);
//Empresa

router.get('/empresa/', getEmpresas);
router.get('/empresa/:id/:titulo_Empresa', getEmpresa);
router.put('/empresa/:id', putEmpresa);


router.get('/empresaE/:id', getEmpresaE);

//Comentarios Empresas
router.get('/empresa/:id', getComentariosEmpresa);
router.delete('/empresa/:id', DeleteComentarioEmpresa);
router.post('/empresa/', postComentarioEmpresa);

export default router;