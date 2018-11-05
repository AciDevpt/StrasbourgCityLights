<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link http://codex.wordpress.org/fr:Modifier_wp-config.php Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define('DB_NAME', 'root');

/** Utilisateur de la base de données MySQL. */
define('DB_USER', 'root');

/** Mot de passe de la base de données MySQL. */
define('DB_PASSWORD', 'root');

/** Adresse de l’hébergement MySQL. */
define('DB_HOST', 'localhost');

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define('DB_CHARSET', 'utf8mb4');

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '~/D/.M}G0h #sA>:m`[F,Dd6 o>rN*8qgsrE?O*8QA:R5&a2d{^t7-Ol!-V.j-:l');
define('SECURE_AUTH_KEY',  'W5Vtc>iY1B6WYrqguHLHB^aKc{5s9exk}ip@X$+UcPW]u)D%vM=8}m.oQV|COV8V');
define('LOGGED_IN_KEY',    'Trm_Q?`uEE{@|)b-wGll*AIJ^@X)vfJX{IP2)z$3Y4_%YbciXr*6hvf2Qs,bJ)_M');
define('NONCE_KEY',        'Njcc!5Zes!/mV+ay0)K%p:-:X]3i@M>Q*@5m]RlRUYs_j}/t4AMNJiYN{GD%S_/#');
define('AUTH_SALT',        'wR@rDGY VA3A XAp;LrA;A`?La@m$Wwjd1 F|KOJR%:4F4cIdnlKJ,~dtUr+`$pd');
define('SECURE_AUTH_SALT', 'VPxCn>qEpkgH(B#ow5}9T#$@HK5*hWX3eEi|c#<uFMHdKj^}`F9)ZwDzh(NaiPoA');
define('LOGGED_IN_SALT',   'vgF%a>7`x!)hiv<X`E_$G)`b1EyD=V]|KN_2Z:R$VS_4N#`,M1g!A1/GW/32&EQi');
define('NONCE_SALT',       ',T,oC=[Z?~x&I`~keZXs^L,CH]%wLGi)kMG?g9CA`KA0g1ze.v|L*ooRA2waAdI9');
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix  = 'wpst_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortemment recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');