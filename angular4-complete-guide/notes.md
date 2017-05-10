# How Angular Starts:

1. main.ts imports app/app.module.ts
2. app.module.ts imports app/app.component.ts
3. app.component.ts has component selector app-root
4. index.html imports app-root

# Databinding

1. Communication between TS code and Template
2. Can use string interpolation ( {{ data }} )
3. Can use property binding ( [property]="data" )
4. Can react to events (Event Binding)
5. Can use two-way-binding ( [(ngModel)]="data" )
6. Do not mix string interpolation and property binding
