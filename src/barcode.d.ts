declare module "gs1-barcode-parser-mod" {
  export function parseBarcode(barcode: string): any;
}

declare module "gs1-parser" {
  export function parse(data: string): any; // Adjust the return type as needed
}
