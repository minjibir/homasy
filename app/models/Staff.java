package models;

import io.ebean.Model;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import java.util.UUID;

public class Staff extends Model {
    @Id
    public UUID uuid;

    @NotNull
    public String firstName;

    @NotNull
    public String lastName;

    @NotNull
    public String role;

    @Column(nullable = false, unique = true)
    public String username;

    @NotNull
    public String password;
}
