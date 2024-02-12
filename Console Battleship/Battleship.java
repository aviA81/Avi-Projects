import java.util.Random;
import java.util.Scanner;

public class Battleship {
    static int[][] board = new int[10][10];
    static Random rand = new Random();

    public static void main(String[] args) {
        InsertShip(2);
        InsertShip(3);
        InsertShip(3);
        InsertShip(4);
        InsertShip(5);
        //PrintBoard(board);// uncomment to see the ships
        PlayGame();
    }

    static void PrintBoard(int[][] theBoard) {
        for (int i = 0; i < theBoard.length; i++) {
            for (int j = 0; j < theBoard[i].length; j++) {
                System.out.print(theBoard[i][j] + "  ");
            }
            System.out.println();
        }
        System.out.println();
    }

    static void InsertShip(int len) {
        boolean findSpot = true;
        int row, col, axis;
        do {
            row = rand.nextInt(9);
            col = rand.nextInt(9);
            axis = rand.nextInt(2); // 0 = row, 1 = col
            findSpot = TestShip(row, col, axis, len);
        } while (findSpot);
        if (axis == 0) {
            for (int i = 0; i < len; i++) {
                board[i][col] = len;
            }
        }
        if (axis == 1) {
            for (int i = 0; i < len; i++) {
                board[row][i] = len;
            }
        }
    }

    static boolean TestShip(int row, int col, int axis, int length) {
        boolean ok = false;
        if (axis == 0) {
            for (int i = 0; i < length; i++) {
                if (board[i][col] != 0) {
                    ok = true;
                    break;
                }
            }
        }
        if (axis == 1) {
            for (int i = 0; i < length; i++) {
                if (board[row][i] != 0) {
                    ok = true;
                    break;
                }
            }
        }
        return ok;
    }

    static void PlayGame() {
        int[][] guessBoard = new int[10][10];
        int rowGuess, colGuess;
        Scanner scan = new Scanner(System.in);
        boolean play = true;
        while (play) {
            PrintBoard(guessBoard);
            System.out.println("Please guess a row 1-10");
            rowGuess = scan.nextInt() - 1;
            System.out.println("Please guess a column 1-10");
            colGuess = scan.nextInt() - 1;
            guessBoard[rowGuess][colGuess] = board[rowGuess][colGuess];
            play = CheckWinner(guessBoard);
        }
        scan.close();
        System.out.println("Yaaaaay!!!!! You won the game!!");
    }

    static boolean CheckWinner(int[][] myBoard) {
        boolean stop = true;
        outer: for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[1].length; j++) {
                if (myBoard[i][j] != board[i][j]) {
                    break outer;
                }
                if (i == 9 && j == 9) {
                    stop = false;
                }
            }
        }
        return stop;
    }
}