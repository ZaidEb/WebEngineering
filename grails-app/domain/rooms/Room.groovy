package rooms;

class Room{
    String  name
    Integer capacity
    // int: cannot be null and has a default value of 0.
    // Integer: can be null, but has no default value.
    String typeOfRoom

    static constraints ={
        name  nullable : false, blank : false, unique : true
        capacity bullable:true
        typeOfRoom inList: ["meeting","seminar","office","laboratory","lecture hall","auditorium","conference room"]

    }
}