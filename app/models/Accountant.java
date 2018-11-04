package models;


import io.ebean.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import java.util.UUID;

@Entity
@Table(name = "accountants")
public class Accountant extends Model {

    @Id
    public UUID uuid;

    @NotNull
    public String fistName;

    @NotNull
    public String lastName;

    @Column(nullable = false, unique = true)
    public String username;

    @NotNull
    public String password;

}
