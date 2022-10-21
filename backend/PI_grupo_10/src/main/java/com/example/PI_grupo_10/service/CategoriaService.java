package com.example.PI_grupo_10.service;

import com.example.PI_grupo_10.exceptions.ResourceNotFoundException;
import com.example.PI_grupo_10.model.Categoria;
import com.example.PI_grupo_10.repository.CategoriaRepository;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoriaService {

    private CategoriaRepository categoriaRepository;
    private static final Logger logger = Logger.getLogger(CategoriaService.class);

    //Inyectar la dependencia
    public CategoriaService(CategoriaRepository categoriaRepository) {
        this.categoriaRepository = categoriaRepository;
    }

    public Categoria actualizar(Categoria c) {
        logger.info("Se actualiza la categoría con el id: " + c.getId());
        return categoriaRepository.save(c);
    }

    public Categoria buscar(Integer id){
        Categoria categoria = null;
        Optional<Categoria> optionalCategoria= categoriaRepository.findById(id);
        if (optionalCategoria.isPresent()){
            categoria= optionalCategoria.get();
            logger.info("Se encontró la categoria con el id: " + id);
        }
        return categoria;
    }

    public List<Categoria> buscarTodos(){
        logger.info("Se buscan todas las categorias");
        return categoriaRepository.findAll();
    }

    public void eliminar(Integer id) throws ResourceNotFoundException {
        if (this.buscar(id)==null){
            logger.error("Se quiere eliminar una categoria con un id inexistente en la base de datos.");
            throw new ResourceNotFoundException("No existe una categoria con el ID: " +id);
        } else{
            categoriaRepository.deleteById(id);
            logger.info("Se elimino la categoria con el id: " + id);
        }
    }

    public Categoria guardar(Categoria c){
        logger.info("Se crea la categoria: " + c);
        return categoriaRepository.save(c);
    }
}
