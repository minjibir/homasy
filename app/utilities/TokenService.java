package utilities;

import javax.crypto.spec.SecretKeySpec;
import javax.xml.bind.DatatypeConverter;
import java.security.Key;

import io.jsonwebtoken.*;

import java.util.Date;

public class TokenService {
    private static TokenService tokenServiceInstance = new TokenService();
    private static String apiKey = "ap1_Sup3r_Scr3t";

    public static TokenService getInstance() {
        return tokenServiceInstance;
    }

    private TokenService() {
    }

    //Sample method to construct a JWT
    public static String encodeToken(String id, String issuer, String subject, long ttlMillis) {

        //The JWT signature algorithm we will be using to sign the token
        SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.HS256;

        long nowMillis = System.currentTimeMillis();
        Date now = new Date(nowMillis);

        //We will sign our JWT with our ApiKey secret
        byte[] apiKeySecretBytes = DatatypeConverter.parseBase64Binary(apiKey);
        Key signingKey = new SecretKeySpec(apiKeySecretBytes, signatureAlgorithm.getJcaName());

        //Let's set the JWT Claims
        JwtBuilder builder = Jwts.builder().setId(id)
                .setIssuedAt(now)
                .setSubject(subject)
                .setIssuer(issuer)
                .signWith(signatureAlgorithm, signingKey);

        //if it has been specified, let's add the expiration
        if (ttlMillis >= 0) {
            long expMillis = nowMillis + ttlMillis;
            Date exp = new Date(expMillis);
            builder.setExpiration(exp);
        }

        //Builds the JWT and serializes it to a compact, URL-safe string
        return builder.compact();
    }


    //Sample method to validate and read the JWT
    public static String decodeToken(String jwt) {
        try {
            //This line will throw an exception if it is not a signed JWS (as expected)
            Claims claims = Jwts.parser()
                    .setSigningKey(DatatypeConverter.parseBase64Binary(apiKey))
                    .parseClaimsJws(jwt).getBody();

            // System.out.println("ID: " + claims.getId());
            // System.out.println("Subject: " + claims.getSubject());
            // System.out.println("Issuer: " + claims.getIssuer());
            // System.out.println("Expiration: " + claims.getExpiration());

            return claims.getId();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
