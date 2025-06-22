import redisClient from "./redisClient.js";

export const invalidateDiagnosisCache = async (
	patientId,
	diagnosisId = null
) => {
	try {
		await redisClient.del(`pdf:all:${patientId}`);

		if (diagnosisId) {
			await redisClient.del(`pdf:one:${patientId}:${diagnosisId}`);
		}

		console.log(
			`[Redis] Invalidated cache for patient ${patientId}, diagnosis ${
				diagnosisId || "ALL"
			}`
		);
	} catch (err) {
		console.error("Failed to invalidate Redis cache:", err);
	}
};
