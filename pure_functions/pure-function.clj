;; Not a pure function because it uses an external global object
(def PI 3.14)

(defn calculate-area
  [radius]
  (* radius radius PI))

(calculate-area 10) ;; returns 314.0

;; pure function because it uses only parameters passed as arguments
(def PI 3.14)

(defn calculate-area
  [radius, PI]
  (* radius radius PI))

(calculate-area 10 PI) ;; returns 314.0

;; Not pure: it uses the global variable and modify the variable
(def counter 1)

(defn increase-counter
  [value]
  (def counter (inc value))
  counter)

(increase-counter counter)

;; pure function: returns the value increased by 1
(def counter 1)

(defn increase-counter
  [value]
  (inc value))

(increase-counter counter) ;; 2
counter ;; 1

;; impure function: reads an external file
(defn characters-counter
  [text]
  (str "Character count: " (count text)))

(defn analyze-file
  [filename]
  (characters-counter (slurp filename)))

(analyze-file "test.txt")

;; impure function: has random number generator
(defn year-end-evaluation
  []
  (if (> (rand) 0.5)
    "You get a raise!"
    "Better luck next year!"))

;; immutability

;; in Javascript we commonly use for loop
;; this for statement "for (var i = 0; i < values.length; i++)" has an "i" mutable

(defn sum
  [values]
  (loop [vals values total 0]
    (if (empty? vals)
      total
      (recur (rest vals) (+ (first vals) total)))))

;; handling mutation
(defn slugify
  [string]
  (clojure.string/replace
    (clojure.string/lower-case
      (clojure.string/trim string)) #" " "-"))

(slugify " I will be a url slug   ") ;; "i-will-be-a-url-slug"

;; refactoring with comp function
(defn slugify
  [string]
  ((comp #(clojure.string/replace % #" " "-")
         clojure.string/lower-case
         clojure.string/trim)
         string))

(slugify " I will be a url slug   ") ;; "i-will-be-a-url-slug"