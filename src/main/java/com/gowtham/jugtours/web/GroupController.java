package com.gowtham.jugtours.web;

import com.gowtham.jugtours.model.Group;
import com.gowtham.jugtours.model.GroupRepository;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;
import java.util.logging.Logger;

@RestController
@RequestMapping("/api")
public class GroupController {
    private final Logger logger = Logger.getLogger(GroupRepository.class.getName());
    private GroupRepository groupRepository;

    public GroupController(GroupRepository groupRepository) {
        this.groupRepository = groupRepository;
    }

    @GetMapping("/groups")
    Collection<Group> groups() {
        return groupRepository.findAll();
    }


    @GetMapping("/group/{id}")
    ResponseEntity<?> group(@PathVariable Long id) {
        Optional<Group> group = groupRepository.findById(id);
        return group.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/group")
    ResponseEntity<Group> createGroup(@Valid @RequestBody Group group) throws URISyntaxException {
        logger.info("Request to create group: " + group);
        Group result = groupRepository.save(group);
        return ResponseEntity.created(new URI("/api/group/" + result.getId())).body(result);
    }
}
