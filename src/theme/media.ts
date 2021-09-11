export const createMediaQuery = (maxWidth: number, minOrMax = 'max'): string => `@media (${minOrMax}-width: ${maxWidth}px)`;

export type Queries = {
	xs: string;
	sm: string;
	md: string;
	lg: string;
};

export const media: Queries = {
	xs: createMediaQuery(600),
	sm: createMediaQuery(960),
	md: createMediaQuery(1280),
	lg: createMediaQuery(1920),
};
