# RiskFreeRX

## Overview

RiskFreeRX is a mobile application designed to help users identify potential allergic reactions to medications before taking them. Many individuals are allergic to certain ingredients in medications, but they may not always be aware of all the components present in different drugs. RiskFreeRX allows users to scan prescriptions, extract the National Drug Code (NDC) from the image, retrieve active and inactive ingredients, and cross-check them against medications the user has previously had adverse reactions to.

## Key Features

- **Image-Based NDC Extraction**: Users can take a picture of their prescription or any document containing an NDC code.

- **Automated Ingredient Lookup**: The app retrieves active and inactive ingredients of the medication using the OpenFDA Drug Labeling API.

- **Allergy Risk Identification**: Cross-checks medication ingredients with previously flagged allergens.

- **Scalable & Secure Architecture**: Built with Supabase for PostgreSQL storage, authentication, and row-level security.

- **Multi-Platform Support**: Developed using React Native & Expo for seamless deployment on both iOS and Android.

- **Cloud-Based Processing**: Uses AWS Lambda & API Gateway for OCR, regex processing, and API interactions.

- **OpenAI-Assisted Ingredient Extraction**: When inactive ingredient data is missing from OpenFDA, the app leverages OpenAI to infer potential ingredients from available drug information.

## Tech Stack

- **Frontend**: React Native & Expo (cross-platform mobile development)

- **Database & Authentication**: Supabase (PostgreSQL with built-in authentication & row-level security)

- **Cloud Functions**: AWS Lambda & API Gateway (serverless architecture)

- **OCR & Data Extraction**: Google Cloud Vision (for text recognition from images)

- **Drug Information Source**: OpenFDA Drug Labeling API (for NDC-based ingredient lookup)

- **AI-Assisted Extraction**: OpenAI (for additional ingredient analysis when data is incomplete)

## How It Works

- **Capture & Upload**: The user takes a picture of their prescription or any document containing an NDC code.

- **OCR & Data Extraction**: Google Cloud Vision extracts text from the image, and regex is applied to identify the NDC code.

- **Ingredient Lookup**: The app queries the OpenFDA Drug Labeling API using the NDC to fetch active and inactive ingredients.

- **Allergy Risk Analysis**: The retrieved ingredients are checked against the user’s known allergens.

- **AI Assistance**: If inactive ingredients are missing, ChatGPT processes the entire drug information to infer potential inactive ingredients.

- **User Alert**: The app informs the user of any potential risks based on ingredient matching.

## Why RiskFreeRX?

- **Security & Privacy**: With Supabase row-level security, user data is strictly protected, ensuring sensitive health information remains confidential.

- **Scalability & Integration**: Designed to be easily integrated into supermarket checkouts, hospital systems, and pharmacies.

- **Comprehensive Analysi**s: Leverages multiple APIs and AI models to enhance ingredient detection and risk assessment.

- **User-Friendly & Accessible**: Cross-platform compatibility ensures that the app is available on both iOS and Android.

## Challenges & Considerations

- **Incomplete Inactive Ingredient Dat**a: The OpenFDA database does not always provide inactive ingredient lists, requiring AI-based inference.

- **Text Complexity in OCR**: Some prescription labels may have complex formatting, requiring advanced regex processing.

- **AI Limitations**: ChatGPT-based ingredient extraction is not 100% reliable but serves as a supplementary risk indicator.

## Future Improvements

- **User-Customized Allergy Profiles**: Allow users to input specific allergens for more precise risk assessment.

- **Integration with Medical Records**: Connect with EHR systems for automatic cross-checking of patient history.

- **Offline Functionality**: Enable local database storage for quicker access and analysis without an internet connection.

## Conclusion

RiskFreeRX enhances medication safety by providing users with a simple yet effective way to identify potential allergens in medications before they take them. By leveraging OCR, cloud APIs, AI, and a secure database, we ensure a scalable, private, and efficient solution for medication safety.

## Contributors

Aaron Wu, Jordan Shamai, Srihan Kakarlapudi
