(setq debug-on-error t)

(defun fizz-buzz(n)
  (while (>= n 0)
    (progn
      (cond ((and (= (% n 3) 0) (= (% n 5) 0)) (message "FizzBuzz"))
            ((= (% n 3) 0) (message "Fizz"))
            ((= (% n 5) 0) (message "Buzz"))
            (t (message (number-to-string n))))
      (setq n (- n 1)))))

(fizz-buzz 15)
