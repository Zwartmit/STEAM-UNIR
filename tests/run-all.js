/**
 * @fileoverview Orquestador y ejecutor de todas las pruebas unitarias del simulador.
 */

import { runVectorTests } from './vector.test.js';

try {
  console.log("====================================================");
  console.log("LABORATORIO DE FÍSICA 1 — EJECUTOR DE PRUEBAS LOCALES");
  console.log("====================================================");
  
  runVectorTests();
  
  console.log("====================================================");
  console.log("ESTADO DEL PROYECTO: SANO Y LISTO PARA DEPLOY");
  console.log("====================================================");
  process.exit(0);
} catch (error) {
  console.error("\n❌ ERROR CRÍTICO DURANTE LA EJECUCIÓN DE PRUEBAS:");
  console.error(error);
  console.log("====================================================");
  process.exit(1);
}
