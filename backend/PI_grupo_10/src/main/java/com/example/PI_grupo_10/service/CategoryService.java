package com.example.PI_grupo_10.service;

import com.example.PI_grupo_10.exceptions.ResourceNotFoundException;
import com.example.PI_grupo_10.model.Category;
import com.example.PI_grupo_10.model.City;
import com.example.PI_grupo_10.repository.CategoryRepository;
import com.example.PI_grupo_10.repository.ProductRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Slf4j
@AllArgsConstructor
@Service
public class CategoryService {

    private CategoryRepository categoryRepository;

    private ProductRepository productRepository;

    public Category editar(Category c) {
        log.info("Se actualiza la categoría con el id: " + c.getId());
        return categoryRepository.save(c);
    }

    public Category buscar(Integer id) throws ResourceNotFoundException {
        Optional<Category> category= categoryRepository.findById(id);
        if (!category.isPresent()){
            log.error("NO EXISTE LA CATEGORY CON EL ID: "+id);
            throw new ResourceNotFoundException("No existe la category con el id: "+ id);
        }
        log.info("Se encontró la category con el id: " + id);
        return category.get();
    }

    public List<Category> listarTodas(){
        log.info("Se buscan todas las categorias");
        return categoryRepository.findAll();
    }

    public void eliminar(Integer id) throws ResourceNotFoundException {
        if (!categoryRepository.existsById(id)){
            log.error("Se quiere eliminar una categoria con un id inexistente en la base de datos.");
            throw new ResourceNotFoundException("No existe una categoria con el ID: " + id);
        } else{
            categoryRepository.deleteById(id);
            log.info("Se elimino la categoria con el id: " + id);
        }
    }

    public Category agregar(Category c){
        log.info("Se crea la categoria: " + c);
        return categoryRepository.save(c);
    }

    public Long actualizarProductAmount(int categoryId){
        //buscar category
        Category category = categoryRepository.findById(categoryId).get();
        //buscar cantidad de productos por categoryId
        category.setProductAmount(productRepository.findByCategoryId(categoryId).stream().count());
        categoryRepository.save(category);
        return category.getProductAmount();
    }
}
