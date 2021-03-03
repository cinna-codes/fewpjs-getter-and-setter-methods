const pi = Math.PI
class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return this.radius * 2
    }

    set diameter(newDiameter) {
        this.radius = newDiameter / 2
    }

    get circumference() {
        return (this.radius * 2) * pi
      }
    
      set circumference( circumference ) {
        this.radius = circumference / (pi * 2)
      }

    get area() {
        return (this.radius**2) * pi
    }
}