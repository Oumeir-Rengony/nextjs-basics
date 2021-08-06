import Document, { Head, Html, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html  lang="en">
                <Head />
                <body>
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;