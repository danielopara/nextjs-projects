export default interface ApiResponse {
  statusCode: number;
  description: string;
  message: string;
  data: string;
  success: boolean;
  error: string;
}
