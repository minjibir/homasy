package models;

import io.ebean.Model;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

public class Staff extends Model {
    @Id
    public long id;

    @NotNull
    public String firstName;

    public String middleName;

    @NotNull
    public String lastName;

    @NotNull
    public String role;

    @Column(nullable = false, unique = true)
    public String username;

    @NotNull
    public String password;
}
