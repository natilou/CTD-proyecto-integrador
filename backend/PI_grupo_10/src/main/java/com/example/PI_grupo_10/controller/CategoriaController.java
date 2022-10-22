package com.example.PI_grupo_10.controller;

import com.example.PI_grupo_10.exceptions.ResourceNotFoundException;
import com.example.PI_grupo_10.model.Categoria;
import com.example.PI_grupo_10.service.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categorias")
public class CategoriaController {

    @Autowired
    private CategoriaService categoriaService;

    @PutMapping
    public ResponseEntity<Categoria> actualizar(@RequestBody Categoria categoria){
        return ResponseEntity.ok(categoriaService.actualizar(categoria));
    }

    @GetMapping
    public ResponseEntity<List<Categoria>> buscarTodos(){
        return ResponseEntity.ok(categoriaService.buscarTodos());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Integer id) throws ResourceNotFoundException {
        categoriaService.eliminar(id);
        return ResponseEntity.ok().body("Categoria eliminada");
    }

    @PostMapping
    public ResponseEntity<Categoria> guardar(@RequestBody Categoria categoria){
        return ResponseEntity.ok(categoriaService.guardar(categoria));
    }
}
