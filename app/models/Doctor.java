package models;

import io.ebean.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import java.util.UUID;

@Entity
@Table(name = "doctors")
public class Doctor extends Model {

    @Id
    public UUID id;

    @Column(nullable = false, unique = true)
    public String doctorId;

    @NotNull
    public String firstName;

    @NotNull
    public String lastName;

    @Column(nullable = false, unique = true)
    public String username;

    @NotNull
    public String password;

    @Column(nullable = false)
    public String role;

    @Column(nullable = false)
    public String department;
}
