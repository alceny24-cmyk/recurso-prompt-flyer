export const FINANCE_DASHBOARD_PROMPT = `Actúa como mi asistente financiero personal.
Crea un panel financiero visual completo en HTML con mis datos personales.

MIS DATOS:

NOMBRE: [Tu nombre]
OCUPACIÓN: [Tu trabajo]
MES: [Mes actual]

INGRESOS DEL MES:
- [Fuente 1]: RD$[monto]
- [Fuente 2]: RD$[monto]
- [Fuente 3]: RD$[monto]

AHORROS ACTUALES: RD$[monto]
META DE AHORRO: RD$[monto] para [fecha u objetivo]

DEUDAS:
- [Deuda 1]: RD$[monto] vence [fecha]
- [Deuda 2]: RD$[monto]

GASTOS PAGADOS ESTE MES:
- [Gasto 1]: RD$[monto]
- [Gasto 2]: RD$[monto]

PENDIENTE POR COBRAR:
- [Persona o cliente]: RD$[monto]

El panel HTML debe incluir:
- Cards con resumen de ingresos, ahorros, deudas y por cobrar
- Tabla de ingresos con badges de colores
- Tabla de deudas con alerta si hay pagos urgentes
- Tabla de gastos pagados
- Barra de progreso hacia mi meta de ahorro
- Diseño moderno fondo oscuro
- Todo en español
- Badges: verde = pagado, amarillo = pendiente, rojo = urgente

Responde SOLO con el código HTML completo, sin explicaciones ni texto adicional.`;
